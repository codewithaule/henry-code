import { Search } from "@material-ui/icons"
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="firstcontainer">
          <div className="message"><h3>Messages</h3></div>
          <div className="searchmessage">
            <Search />
            <input type="text" placeholder="Search Messages" className="searchinput" />
          </div>
          <div className="rightbarheading">
            <h3>Primary</h3>
            <h3>General</h3>
            <h3>Request(9)</h3>
          </div>
          <div className="line"></div>
          <hr className="hr"/>
          <div className="requests">
            <ul className="request">
            
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            <li><div>
              <img src="/assets/ajs.jpeg" alt="" />
              </div>
              <div>
              <p><b>Mark Henry</b></p>
              <small>Im feeling sleepy</small>
              </div>
            </li>
            </ul>
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
      </div>
    </div>
  )
}
