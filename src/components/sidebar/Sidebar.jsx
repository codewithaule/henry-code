import './sidebar.css'
import { Bookmark, Event, Group, HelpOutline, MessageOutlined, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className='sidebar' >
      <div className="sidebarWrapper">
        <div className="user">
          <img src="./assets/cdd.jpg" className='userImg' alt="" />
          <span className="userSpan">Daniel Orji <br /> <span className="userSpan2">@daniel</span></span>
         
        </div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarListIcon'/>
            <span className="sidebarListIconText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <MessageOutlined className='sidebarListIcon'/>
            <span className="sidebarListIconText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarListIcon'/>
            <span className="sidebarListIconText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarListIcon'/>
            <span className="sidebarListIconText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarListIcon'/>
            <span className="sidebarListIconText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarListIcon'/>
            <span className="sidebarListIconText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarListIcon'/>
            <span className="sidebarListIconText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarListIcon'/>
            <span className="sidebarListIconText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarListIcon'/>
            <span className="sidebarListIconText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Create Post</button>
      
      </div>
    </div>
  )
}
