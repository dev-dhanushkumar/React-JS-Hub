import React, {useState} from 'react';

export default function Login() {
    let [vali,setVali] = useState(0)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const loginHandler = (e)=>{
        if(user.length < 4 || password.length < 8) {
            setVali(1);
        } else {
            setVali(2);
        }
        e.preventDefault();

    }
    const userHandler = (e)=> {
        let item = e.target.value;
        if(item.length < 4){
            setUserErr(true)
        } else {
            setUserErr(false)
        }
        // console.log(e.target.value);
        setUser(item);
    }

    const passwordHandler = (e)=> {
        let item = e.target.value;
        if(item.length < 8){
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
        }
        // console.log(e.target.value);
        setPassword(item);
    }
    return(
        <div>
            <h1>Login</h1>
            {vali === 2?<h3 style={{color:"green"}}>All are Good</h3>:vali === 1?<h3 style={{color:"red"}}>Invalid Data</h3>:null}
            <form onSubmit={loginHandler}>
                User Id: <input type='text' placeholder='Enter User Id' onChange={userHandler} />
                {userErr?<span>Invalid Data</span>:null}<br /><br />
                Password: <input type='password' placeholder='Enter User Password' onChange={passwordHandler}/>
                {passwordErr?<span>Invalid Data</span>:null} <br /> <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}