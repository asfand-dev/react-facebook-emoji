import React, { Component } from "react";
import "./facebook-emojis.css";

export class FacebookEmoji extends Component {
 
  render() {
    return (
      <div id="zama-emoji">
        {emojis[this.props.name] ? emojis[this.props.name] : emojis["like"]}
      </div>
    );
  }
}

const emojis = {
  like: (
    <div className="zama-emoji  emoji--like">
      <div className="emoji__hand">
        <div className="emoji__thumb" />
      </div>
    </div>
  ),
  love: (
    <div className="zama-emoji  emoji--love">
      <div className="emoji__heart" />
    </div>
  ),
  haha: (
    <div className="zama-emoji  emoji--haha">
      <div className="emoji__face">
        <div className="emoji__eyes" />
        <div className="emoji__mouth">
          <div className="emoji__tongue" />
        </div>
      </div>
    </div>
  ),
  yay: (
    <div className="zama-emoji  emoji--yay">
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__mouth" />
      </div>
    </div>
  ),
  wow: (
    <div className="zama-emoji  emoji--wow">
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__eyes" />
        <div className="emoji__mouth" />
      </div>
    </div>
  ),
  sad: (
    <div className="zama-emoji  emoji--sad">
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__eyes" />
        <div className="emoji__mouth" />
      </div>
    </div>
  ),
  angry: (
    <div className="zama-emoji  emoji--angry">
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__eyes" />
        <div className="emoji__mouth" />
      </div>
    </div>
  )
};
