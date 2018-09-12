import React from 'react';
import { render} from 'react-dom';
import FacebookEmoji from '../../src';
import './style.css';

const App = () => (
    <div className="margin">
        <h2>List of Emojis</h2>
        <FacebookEmoji type="like" />
        <FacebookEmoji type="love" />
        <FacebookEmoji type="wow" />
        <FacebookEmoji type="yay" />
        <FacebookEmoji type="angry" />
        <FacebookEmoji type="haha" />
        <FacebookEmoji type="sad" />

        <h2>List of different sizes</h2>
        <FacebookEmoji type="like" size="xxs"/>
        <FacebookEmoji type="like" size="xs"/>
        <FacebookEmoji type="like" size="sm"/>
        <FacebookEmoji type="like" size="md"/>
        <FacebookEmoji type="like" size="lg"/>
        <FacebookEmoji type="like" size="xl"/>
        <FacebookEmoji type="like" size="xxl"/>
        <FacebookEmoji type="like" size="xxxl"/>
    </div>
);
render(<App />, document.getElementById("root"));