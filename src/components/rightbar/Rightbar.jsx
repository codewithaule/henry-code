import { Cake, Event, FiberManualRecordRounded, Group, MailOutline, MenuBook, Person, Save } from "@material-ui/icons"
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">

       <div className="firstcontainer">
        <div className="leaderboard"><h1>Leader Board</h1></div>
        <div className="firstleaderboard"  id="leader">
          <img src="/assets/man.jpeg" alt="" />
           <div>
          <p>Omojuwon Adeoba</p>
          <small>1st(Gold Winner) </small>
          <FiberManualRecordRounded className="secroundicon"/>
          <FiberManualRecordRounded className="roundicon"/>
          <small className='lastsmall'>1,800 Points</small>
          
          </div>
        </div>
        <div className="secleaderboard" id="leader">
        <img src="/assets/boy.jpeg" alt="" />
        <div>
          <p>Queenly Izomurua</p>
          <small>2nd(Silver Winner) </small>
          <FiberManualRecordRounded className="secroundicon"/>
          <FiberManualRecordRounded className="roundicon"/>
          <small className='lastsmall'>1,729 Points</small>
          </div>
        </div>
        <div className="thirdleaderboard"  id="leader">
        <img src="/assets/SECGIRL.jpeg" alt="" />
        <div>
          <p>Augustine Osimero</p>
          <small>3rd(Gold Winner) </small>
          <FiberManualRecordRounded className="secroundicon"/>
          <FiberManualRecordRounded className="roundicon"/>
          <small className='lastsmall'>1,610 Points</small>
          </div>
        </div>
        <div className="forthleaderboard"  id="leader">
        <img src="/assets/IMG_1340.jpg" alt="" />
        <div>
          <p>Seminat Hassan</p>
          <small>4th</small>
          <small className='lastsmall'>1,610 Points</small>
          </div>
        </div>
        <div className="fifthleaderboard"  id="leader">
        <img src="/assets/girl.jpeg" alt="" />
        <div>
          <p>Tribet Temiade</p>
          <small>5th</small>
          <small className='lastsmall'>1,508 Points</small>
          </div>
        </div>
       </div>
       <div className="firstcontainer">
        <div className="leaderboard"><h2>Upcoming Birthdays</h2></div>
        <div className="firstleaderboard"  id="leader">
          <img src="/assets/man.jpeg" alt="" />
           <div className="content">
          <p>Omojuwon Adeoba <small className="ub">1 year member</small></p>
          <small>July 8 </small>
          <Cake className="roundicon"/>
          <small className='lastsmalll'>Write on her Timeline</small>
          
          </div>
        </div>
        <div className="secleaderboard" id="leader">
        <img src="/assets/boy.jpeg" alt="" />
        <div className="content">
          <p>Queenly Izomurua <small className="ub">1 year member</small></p>
          <small>July 9 </small>
          <Cake className="roundicon"/>
          <small className='lastsmalll'>Write on his Timeline</small>
          </div>
        </div>
        <div className="thirdleaderboard"  id="leader">
        <img src="/assets/SECGIRL.jpeg" alt="" />
        <div className="content" >
          <p>Augustine Osimero <small className="ub">1 year member</small></p>
          <small>July 12 </small>
          <Cake className="roundicon"/>
          <small className='lastsmalll'>Write on her Timeline</small>
          </div>
        </div>
        <div className="forthleaderboard"  id="leader">
        <img src="/assets/IMG_1340.jpg" alt="" />
        <div className="content">
          <p>Seminat Hassan <small className="ub">1 year member</small></p>
          <small>July 11</small>
          <Cake className="roundicon"/>
          <small className='lastsmalll'>Write on his Timeline</small>
          </div>
        </div>
        <div className="fifthleaderboard"  id="leader">
        <img src="/assets/girl.jpeg" alt="" />
        <div className="content">
          <p>Tribet Temiade <small className="ub">1 year member</small></p>
          <small>July 12</small>
          <Cake className="roundicon"/>
          <small className='lastsmalll'>Write on his Timeline</small>
          </div>
        </div>
       </div>
        <div className="spanrequest">Requests</div>
          <div className="firstrequest">
          <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>8 mutual friends</small>
              </div>
            </li>
            <div className="buttondiv">
              <button className="Acceptbutton">Accept</button>
              <button className="Declinebutton">Decline</button>
            </div>
          </div>
          <div className="firstrequest">
          <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>8 mutual friends</small>
              </div>
            </li>
            <div className="buttondiv">
              <button className="Acceptbutton">Accept</button>
              <button className="Declinebutton">Decline</button>
            </div>
          </div>
          <div className="firstrequest">
          <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>8 mutual friends</small>
              </div>
            </li>
            <div className="buttondiv">
              <button className="Acceptbutton">Accept</button>
              <button className="Declinebutton">Decline</button>
            </div>
          </div>
          <div className="assets">Your Assets</div>
          <div className="assetss">
          <ul className="asset">
            <li className="one"><Group /> <span>Groups</span></li>  
            <li className="two"><MenuBook /><span>Pages</span></li>  
            <li className="three"> <Person/><span>Friends</span></li>  
            <li className="four"><Event /><span>Events</span></li>  
            <li className="five"> <Save /><span>Saved Post</span></li>  
              
            </ul>
            </div>
      </div>
    </div>
  )
}
