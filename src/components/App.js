import React, { useState } from 'react';
import video from "../data/video.js";
import VideoDisplay from './VideoDisplay';
import Comments from './Comments';


function App() {

  const [commentShow, setCommentShow] = useState(true);

  function handleComments() {
    setCommentShow(commentShow => !commentShow)
  }

  const cDisplay = commentShow ? "block" : "none"
  const bText = commentShow ? "Hide Comments" : "Show Comments"

  return (
    <div className="App">
      <VideoDisplay
        video={video}
      />
      <Comments
        comments={video.comments}
        toggle={handleComments}
        text={bText}
        display={cDisplay} />
    </div>
  );
}

export default App;
