import {Bookmark,  ChatBubble,  Event, Group, HelpOutlined, PlayCircleFilledOutlined, RssFeed, School, WorkOutlined} from "@material-ui/icons"
import { Users } from "../../dummyData"
import CloseFriends from "../closeFriends/CloseFriends"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
               <RssFeed className="sidebarIcon"/>
               <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
               <ChatBubble className="sidebarIcon"/>
               <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
               <PlayCircleFilledOutlined className="sidebarIcon"/>
               <span className="sidebarListItemText">video</span>
            </li>
            <li className="sidebarListItem">
               <Group className="sidebarIcon"/>
               <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
               <Bookmark className="sidebarIcon"/>
               <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
               <HelpOutlined className="sidebarIcon"/>
               <span className="sidebarListItemText">Question</span>
            </li>
            <li className="sidebarListItem">
               <WorkOutlined className="sidebarIcon"/>
               <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
               <Event className="sidebarIcon"/>
               <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
               <School className="sidebarIcon"/>
               <span className="sidebarListItemText">Courses</span>
            </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
             {Users.map((u)=>(
              <CloseFriends key={u.id} user={u} />
             ))}
            </ul>
      </div>
    </div>
  )
}
