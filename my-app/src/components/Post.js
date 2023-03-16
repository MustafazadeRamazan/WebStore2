import React, { useState } from 'react';
import '../index.css';

function Post(props) {
  const [fullContent, setFullContent] = useState(false);

  const toggleContent = () => {
    setFullContent(!fullContent);
  };

  return (
    <div>
      <h3 className='h2'>{props.title}</h3>
      {fullContent ? (
        <p className='h3'>{props.content}</p>
      ) : (
        <p className='h3'>
          {props.content.substring(0, 100)}...
          <button onClick={toggleContent}>Read more</button>
        </p>
      )}
    </div>
  );
}

export default Post;
