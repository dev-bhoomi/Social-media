import { useRef } from "react"


export default function Login({setUsername}) {
  const inputRef = useRef()

  const handleClick=()=>{
    inputRef.current.value && setUsername(inputRef.current.value)
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Lamasocial.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input 
                type="email"
                placeholder="Email" 
                className="loginInput" 
                ref={inputRef}
                />
                <input type="password"
                placeholder="Password" 
                className="loginInput" 
                ref={inputRef}
                />

                <button className="loginButton" onClick={handleClick}>Log In</button>
            </div>
        </div>
      </div>
    </div>
  )
} 
