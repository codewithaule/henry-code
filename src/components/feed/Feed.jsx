import "./feed.css"
import {Bookmark, Chat, Favorite, ListSharp, Share} from "@material-ui/icons"
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">  
      <div className="feedWrap">
        <div className="feedImg">
        <div className="imgfeed">
            <img src="/assets/ajs.jpeg" alt="" />
            </div>
            <p className="name">Your Story</p>
        </div>
        <div className="feedImg">
        <div className="imgfeed">
            <img src="/assets/ajs.jpeg" alt="" />
            </div>
            <p className="name">Winna Jane</p>
        </div>
        <div className="feedImg">
        <div className="imgfeed">
            <img src="/assets/ajs.jpeg" alt="" />
            </div>
            <p className="name">Bruce Wayne</p>
        </div>
        <div className="feedImg">
        <div className="imgfeed">
            <img src="/assets/ajs.jpeg" alt="" />
            </div>
            <p className="name">Stark Rema</p>
        </div>
        <div className="feedImg">
        <div className="imgfeed">
            <img src="/assets/ajs.jpeg" alt="" />
            </div>
            <p className="name">kenneth George</p>
        </div>
       
      </div>
      <form className="create-post">
      <div className="postImg">
                <img src="/assets/cdd.jpg" alt="" />
            </div>
            <input type="text" placeholder="whats on your mind, Diana?" id="create-post" />
            <input type="text" value="Post" className="btn-btn-primary" />
        </form>
        <div className="mainfeed">
            <div className="mainfeedname">
                <img src="/assets/cde.jpg" alt="" />
                <h3>Lana Rose <br /> <small>Dubai, 15 MINUTES AGO</small></h3>
                <ListSharp className="listSharp" />
            </div>
            <div className="mainfeedimg">
                <img src="/assets/cmm.jpg" alt="" />
            </div>
            <div className="iconss">
           <div> 
            <Share className="share"/>
            <Favorite className="favorite"/>
            <Chat />
            </div>
           <div>
           <Bookmark className="Bookmark"/>
           </div>
            </div>
            <div className="nextmainfeedimg">
                <div className="theimg">
                    <img src="/assets/ajs.jpeg" alt="" />
                    <img src="/assets/ajs.jpeg" alt="" />
                    <img src="/assets/ajs.jpeg" alt="" />
                    <p>Liked by <b>Daniella Pana</b>  and <b> 1000 others</b></p>
                </div>
                
                <p><b>Daniella Pana </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sit quae nesciunt cumque facere neque</p>
                 <small>View all 277 Comments</small>
            </div>
        </div>
        <div className="mainfeed">
            <div className="mainfeedname">
                <img src="/assets/cde.jpg" alt="" />
                <h3>Lana Rose <br /> <small>Dubai, 15 MINUTES AGO</small></h3>
                <ListSharp className="listSharp" />
            </div>
            <div className="mainfeedimg">
                <img src="/assets/cmm.jpg" alt="" />
            </div>
            <div className="iconss">
           <div> 
            <Share className="share"/>
            <Favorite className="favorite"/>
            <Chat />
            </div>
           <div>
           <Bookmark className="Bookmark"/>
           </div>
            </div>
            <div className="nextmainfeedimg">
                <div className="theimg">
                    <img src="/assets/ajs.jpeg" alt="" />
                    <img src="/assets/ajs.jpeg" alt="" />
                    <img src="/assets/ajs.jpeg" alt="" />
                    <p>Liked by <b>Daniella Pana</b>  and <b> 1000 others</b></p>
                </div>
                
                <p><b>Daniella Pana </b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sit quae nesciunt cumque facere neque</p>
                 <small>View all 277 Comments</small>
            </div>
        </div>
        
      </div>
    </div>
  )
}
