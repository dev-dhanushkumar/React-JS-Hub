import React, { useContext, useEffect, useRef } from 'react';
import './VideoCall.css'
import { AppContext } from "../../context/AppContext";
import { database } from '../../config/firebase';
import { ref, set, onValue, remove } from 'firebase/database';
import { Phone, PhoneOff, Video, VideoOff, Mic, MicOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
  const {
    callStatus,
    setCallStatus,
    activeCall,
    setActiveCall,
    localStream,
    setLocalStream,
    remoteStream,
    setRemoteStream,
    userData
  } = useContext(AppContext);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const currentUserId = userData.id;
  console.log("Current UserID: ", currentUserId);

  const webrtcConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]
  };

  useEffect(() => {
    if (callStatus === 'idle') return;

    const setupCall = async () => {
      try {

        // Get local media stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;

        // Create peer connection
        peerConnection.current = new RTCPeerConnection(webrtcConfig);

        // Add local tracks to peer connection
        stream.getTracks().forEach(track => {
          peerConnection.current.addTrack(track, stream);
        });

        // Handle incoming tracks
        peerConnection.current.ontrack = (event) => {
          setRemoteStream(event.streams[0]);
          console.log(remoteStream);
          remoteVideoRef.current.srcObject = event.streams[0];
        };

        // Handle ICE candidates
        peerConnection.current.onicecandidate = (event) => {
          if (event.candidate) {
            const recipientId = activeCall.recipientId;
            set(ref(database, `calls/${recipientId}/candidates/${Date.now()}`), {
              candidate: event.candidate.toJSON()
            });
          }
        };

        if (activeCall.type === 'outgoing') {
          // Create and send offer
          const offer = await peerConnection.current.createOffer();
          console.log("Offer: ",offer);
          
          await peerConnection.current.setLocalDescription(offer);

          set(ref(database, `calls/${activeCall.recipientId}/incoming`), {
            callerId: currentUserId,
            offer: offer
          });
        }
      } catch (error) {
        console.error('Error setting up call:', error);
        endCall();
      }
    };

    setupCall();

    // Listen for call signals
    const callsRef = ref(database, `calls/${currentUserId}`);
    const unsubscribe = onValue(callsRef, async (snapshot) => {
      const data = snapshot.val();
      console.log("Listening: ",data);
      if (!data) return;

      if (data.incoming && callStatus === 'idle') {
        // Handle incoming call
        setCallStatus('incoming');
        setActiveCall({
          recipientId: data.incoming.callerId,
          type: 'incoming'
        });
      }

      if (data.answer && callStatus === 'calling') {
        // Handle call answer
        await peerConnection.current.setRemoteDescription(
          new RTCSessionDescription(data.answer)
        );
        setCallStatus('connected');
      }

      if (data.candidates) {
        // Add ICE candidates
        Object.values(data.candidates).forEach(async ({ candidate }) => {
          if (candidate && peerConnection.current) {
            await peerConnection.current.addIceCandidate(
              new RTCIceCandidate(candidate)
            );
          }
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [callStatus, activeCall]);

  const answerCall = async () => {
    try {
      const callData = await get(ref(database, `calls/${currentUserId}/incoming`));
      const { offer, callerId } = callData.val();

      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(offer)
      );

      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);

      await set(ref(database, `calls/${callerId}/answer`), {
        answer: answer
      });

      setCallStatus('connected');
    } catch (error) {
      console.error('Error answering call:', error);
      endCall();
    }
  };

  const endCall = () => {
    if (peerConnection.current) {
      peerConnection.current.close();
    }
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    setLocalStream(null);
    setRemoteStream(null);
    setCallStatus('idle');
    setActiveCall(null);

    // Clean up Firebase call data
    if (activeCall) {
      remove(ref(database, `calls/${currentUserId}`));
      remove(ref(database, `calls/${activeCall.recipientId}`));
    }

    // const navigate = useNavigate();
    // navigate("/chat")
  };

  if (callStatus === 'idle') return null;

  return (
    <div className="video-call-overlay">
      <div className="video-call-container">
        <div className="video-grid">
          <div className="video-wrapper">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="video-stream"
            />
            <div className="video-label">
              <p>You</p>
            </div>
          </div>
          <div className="video-wrapper">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="video-stream"
            />
            <div className="video-label">
              <p>{activeCall?.recipientName || 'Recipient'}</p>
            </div>
          </div>
        </div>

        <div className="call-controls">
          {callStatus === 'incoming' ? (
            <>
              <button
                onClick={answerCall}
                className="call-button answer-button"
              >
                <Phone />
              </button>
              <button
                onClick={endCall}
                className="call-button end-button"
              >
                <PhoneOff />
              </button>
            </>
          ) : (
            <button
              onClick={endCall}
              className="call-button end-button"
            >
              <PhoneOff />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCall;