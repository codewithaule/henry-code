import './sidebar.css'
import { Bookmark, Group, HelpOutline, Event, MessageOutlined, PlayCircleFilledOutlined, RssFeed, School, WorkOutline, Home, NotificationsActive, SettingsCell, Style, Settings } from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className='sidebar' >
      <div className="sidebarWrapper">
        <div className="celebritycontainer">
          <div className="celebcaption"><h3>Celebrity of the month</h3></div>
          <img src="/assets/man.jpeg" alt="" className='imgg'/>
          <div className="winner">Winner</div>
          <div className="july"> <Event />July 2022</div>
          <div className="abigirl"><h2>Abigir Amastar</h2></div>
          <div className="seccaption"><span> A very smart lady who is sent to conquer the world. I am set for the Skies </span></div>
          <div className='knowmore'><span>Know more....</span></div>
        </div>
       {/* <div className="user">
          <img src="./assets/cdd.jpg" className='userImg' alt="" />
          <span className="userSpan">Daniel Orji <br /> <span className="userSpan2">@daniel</span></span>
         
        </div>
  */}
  <div className='mainmenu'><h3>Menu</h3></div>
        <div><ul className="sidebarList">
          <li className="sidebarListItem" id='home'>
            <Home className='sidebarListIcon'/>
            <span className="sidebarListIconText">Home</span>
          </li>
          <li className="sidebarListItem" id='messages'>
            <MessageOutlined className='sidebarListIcon'/>
            <span className="sidebarListIconText">Messages</span>
          </li>
          <li className="sidebarListItem" id='notification'>
            <NotificationsActive className='sidebarListIcon'/>
            <span className="sidebarListIconText">Notifications</span>
          </li>
          <li className="sidebarListItem" id='theme'>
            <Style className='sidebarListIcon'/>
            <span className="sidebarListIconText">Theme Customization</span>
          </li>
          <li className="sidebarListItem" id='settings'>
            <Settings className='sidebarListIcon'/>
            <span className="sidebarListIconText">Settings</span>
          </li>
          </ul></div>
        <button className="sidebarButton">Create Post</button>
      
      </div>
    </div>
  )
}
