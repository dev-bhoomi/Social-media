import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="row">
        <div className="col-3">
          <div className="topbarLeft">
            <span className="logo mt-2">Lamasocial</span>
          </div>
        </div>
        <div className="col-5">
          <div className="topbarCenter">
            <div className="searchbar mt-2">
              <Search className="searchIcon"/>
              <input 
              placeholder="Search for friend, post or video" 
              className="searchInput"
               />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="topbarRight mt-2">
            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons fs-3">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div> 
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <Link to="/profile">
            <img src="assets/person/1.jpeg" alt="" className="topbarImg"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
