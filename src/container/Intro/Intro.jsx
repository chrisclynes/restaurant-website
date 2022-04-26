import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef= React.useRef();

  const handleVideo = () => {
    const player = document.getElementById("player_overlay")
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    //toggle for video player state
    if(playVideo) {
      vidRef.current.pause();
        player.style.background="rgba(0,0,0, 0.65)";
    }else {
      vidRef.current.play();
        player.style.background="none";
    }
  }

  return (
    <div className="app__video" onClick={handleVideo}>
    <video 
    src={meal}
    ref={vidRef}
    type="video/mp4"
    loop
    controls={false}
    muted
    />
    <div className="app__video-overlay flex__center" id="player_overlay">
      <div className="app__video-overlay_circle flex__center" >
        {playVideo ? <BsPauseFill color="#fff" fontSize={25} /> : <BsFillPlayFill color="#fff" fontSize={25} />}
      </div>
    </div>
  </div>
  );
}

export default Intro;
