import React from 'react';

function Comments({ comments, toggle, text, display }) {
   const renderComments =
        comments.map(comment => 
            <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            </div>
        )
    
    return (
        <div>
            <p><button onClick={toggle} >{text}</button></p>
            <hr></hr>
            <div style={{display: display}}>
            <h2>{comments.length} Comments</h2>
            {renderComments}
            </div>
        </div>
    )
}

export default Comments;