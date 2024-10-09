import React, { useContext, useEffect, useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import upload from '../../lib/upload';
import { AppContext } from '../../context/AppContext';

const ProfileUpdate = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevimage] = useState("");
  const {setUserData} = useContext(AppContext);

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {
      if(!prevImage && !image) {
        toast.error("Upload profile picture");
      }

      const docRef = doc(db,'users', uid);
      if(image) {
        const imgUrl = await upload(image);
        setPrevimage(imgUrl);
        await updateDoc(docRef, {
          avatar:imgUrl,
          bio:bio,
          name:name
        })
      } else {
        await updateDoc(docRef, {
          bio:bio,
          name:name
        })
      }

      const snap = await getDoc(docRef);
      setUserData(snap.data());
      navigate("/chat");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  useEffect(()=> {
    onAuthStateChanged(auth, async (user) => {
      if(user) {
        setUid(user.uid);
        const docRef = doc(db,"users", user.uid);
        const docSnap = getDoc(docRef);
        if((await docSnap).data().name) {
          setName((await docSnap).data().name);
        }

        if((await docSnap).data().bio) {
          setBio((await docSnap).data().bio);
        }

        if((await docSnap).data().avatar) {
          setPrevimage((await docSnap).data().avatar);
        }
      } else {
        navigate('/');
      }
    })
  },[])

  return (
    <div className='profile'>
      <div className="profile-container">
        <form onSubmit={profileUpdate}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input  onChange={(e)=> setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={image? URL.createObjectURL(image) : prevImage? prevImage : assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Your name' required />
          <textarea onChange={(e) => setBio(e.target.value)} value={bio} placeholder='Write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img className='profile-pic' src={image? URL.createObjectURL(image) : prevImage? prevImage : assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate