import React, { Component } from "react";
import "./facebook-emojis.css";

export default class FacebookEmoji extends Component {
 
  render() {
    let Emoji = emojis["like"];
    if (this.props.hasOwnProperty('type')) {
      Emoji = emojis[this.props.type] ? emojis[this.props.type] : emojis["like"];
    }
    return (
      <div id="zama-emoji">
        <Emoji size={this.props.size} />
      </div>
    );
  }
}

const emojis = {
  like: (props) => <div className={'zama-emoji emoji--like ' + (props.size? props.size: 'md')}>
      <div className="emoji__hand">
        <div className="emoji__thumb" />
      </div>
    </div>
  ,
  love: (props) => <div className={'zama-emoji emoji--love ' + (props.size? props.size: 'md')}>
      <div className="emoji__heart" />
    </div>
  ,
  haha: (props) => <div className={'zama-emoji emoji--haha ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
        <div className="emoji__eyes" />
        <div className="emoji__mouth">
          <div className="emoji__tongue" />
        </div>
      </div>
    </div>,
  yay: (props) => <div className={'zama-emoji emoji--yay ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__mouth" />
      </div>
    </div>,
  wow: (props) => <div className={'zama-emoji emoji--wow ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__eyes" />
        <div className="emoji__mouth" />
      </div>
    </div>,
  sad: (props) => <div className={'zama-emoji emoji--sad ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__eyes" />
        <div className="emoji__mouth" />
      </div>
    </div>,
  angry: (props) => <div className={'zama-emoji emoji--angry ' + (props.size? props.size: 'md')}>
      <div className="emoji__face">
        <div className="emoji__eyebrows" />
        <div className="emoji__eyes" />
        <div className="emoji__mouth" />
      </div>
    </div>
};
