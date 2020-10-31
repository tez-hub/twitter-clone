import React from 'react';
import "./Widgets.css";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1311611459936358400"} />
                <TwitterTweetEmbed tweetId={"1231265779787665409"} />
                <TwitterTweetEmbed tweetId={"957168312932237312"} />
            </div>
            <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="TezKE"
            options={{height: 400}}
            />
            <TwitterShareButton 
            url={"https://facebook.com/dennis.mwema.33"}
            options={{ text: "#reactJS is awesome", via: "Tez KE"}}
            />
            {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Find yourself someone who looks at you the way <a href="https://twitter.com/JuneChepkemei?ref_src=twsrc%5Etfw">@junechepkemei</a> looks at me haha.<a href="https://twitter.com/hashtag/KonzaHackathon?src=hash&amp;ref_src=twsrc%5Etfw">#KonzaHackathon</a> <a href="https://twitter.com/hashtag/SoftI?src=hash&amp;ref_src=twsrc%5Etfw">#SoftI</a> <br>@itsbenM1 <a href="https://twitter.com/muasya_jack?ref_src=twsrc%5Etfw">@muasya_jack</a> <a href="https://twitter.com/stevekilosjb?ref_src=twsrc%5Etfw">@stevekilosjb</a> <a href="https://t.co/HuNPsuH3XS">pic.twitter.com/HuNPsuH3XS</a></p>&mdash; TezKE (@tez_ke) <a href="https://twitter.com/tez_ke/status/1231265779787665409?ref_src=twsrc%5Etfw">February 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
            
        </div>
    );
}

export default Widgets;
