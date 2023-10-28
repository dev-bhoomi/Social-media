

export default function Online({user}) {
  return (
    <div>
       <li className="rightBarFriend">
                <div className="rightbarProfileImgContainer">
                  <img 
                  className="rightbarProfileImg" 
                  src={user.profilePicture} 
                  alt="" 
                  />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
              </li>
    </div>
  )
}
