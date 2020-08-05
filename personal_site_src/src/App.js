import React from 'react';
import Profile from './sessions/Profile/Profile.js';
import SocialMedia from './sessions/SocialMedia/SocialMedia';
import './App.css';
import {PROFILE, SOCIAL_MEDIA} from  './config.js';

function App() {
  return (
    <div className="App">
      <Profile content={PROFILE}/>
      <SocialMedia content={SOCIAL_MEDIA}/>
    </div>
  );
}

export default App;
