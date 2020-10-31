import React, { useState } from 'react';
// import { Button } from '@material-ui/core';
import { Avatar, Button } from "@material-ui/core";
import './TweetBox.css';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Tez KE',
            username: 'tez_ke',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars2.githubusercontent.com/u/67080798?s=400&u=bff33018baa0f823d180506be4f08f6db8c39b04&v=4"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/67080798?s=400&u=bff33018baa0f823d180506be4f08f6db8c39b04&v=4" />
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
                </div>
                    <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox;


