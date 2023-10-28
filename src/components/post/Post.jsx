import { MoreVert } from "@material-ui/icons"
import { Users } from '../../dummyData'
import {useState} from "react"
export default function Post({ post }) {

    const [like,setLike] = useState(post.like)
    const [isLikeed,setIsLikeed] = useState(false)

    const likeHandler=()=>{
        setLike(isLikeed ? like-1 : like+1)
        setIsLikeed(!isLikeed)
    }


      return (
      <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" 
                        src={Users.filter((u)=>u.id === post.userId)[0].profilePicture}
                        alt="" />
                        <span className='postUsername'>
                            {Users.filter((u)=>u.id === post.userId)[0].username}
                            </span>
                        <span className='postDate'>{post.data}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc} </span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="assets/heart.png"onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
        )
}
