
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import { useState } from 'react'
import Login from '../login/Login'

export default function Hause() {
  const [username,setUsername] = useState(null)
  return (
    <>
    <div className="hause">
      {username ? (
        <>
        <Topbar />
      <div className="homeContainer">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-5">
            <Feed />
          </div>
          <div className="col-4">
            <Rightbar />
          </div>
        </div>
      </div>
        </>

      ): <Login setUsername={setUsername}/>}
    </div>
      

    </>
  )
}
