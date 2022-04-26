import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef= React.useRef();

  const handleVideo = () => {
    const player = document.querySelector("#player_overlay")
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    //toggle for video player state
    if(playVideo) {
      vidRef.current.pause();
        player.classList.toggle("player_overlay_play_pause")
    }else {
      vidRef.current.play();
        player.classList.toggle("player_overlay_play_pause");
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
    <div className="app__video-overlay flex__center player_overlay_play_pause" id="player_overlay">
      <div className="app__video-overlay_circle flex__center" >
        {playVideo ? <BsPauseFill color="#fff" fontSize={25} /> : <BsFillPlayFill color="#fff" fontSize={25} />}
      </div>
    </div>
  </div>
  );
}

export default Intro;
