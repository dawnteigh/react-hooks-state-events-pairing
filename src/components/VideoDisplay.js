import React, { useState } from 'react';

function VideoDisplay({ video }) {

    const [votes, setVotes] = useState(video)

    function handleUpvote() {
        let newVote = {...votes}
        console.log(newVote)
        newVote.upvotes = newVote.upvotes + 1
        setVotes(newVote)
      }
      
      function handleDownvote() {
        let newVote = {...votes}
        newVote.downvotes = newVote.downvotes + 1
        setVotes(newVote)
      }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpvote}>{votes.upvotes}👍</button>
            <button onClick={handleDownvote}>{votes.downvotes}👎</button>
        </div>
    )
}

export default VideoDisplay;