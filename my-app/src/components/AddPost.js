import React, { useState } from 'react';
import '../index.css';

function AddPost(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setTitleError('');
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    setContentError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    if (title.trim() === '') {
      setTitleError('Title is required');
      isValid = false;
    }
    if (content.trim() === '') {
      setContentError('Content is required');
      isValid = false;
    }
    if (isValid) {
      const newPost = {
        id: Date.now(),
        title,
        content,
      };
      props.onAddPost(newPost);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2 className='add-post'>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label' htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
          {titleError && <div className="error">{titleError}</div>}
        </div>
        <div>
          <label className='label2' htmlFor="content">Content</label>
          <textarea className='textarea'
            id="content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          {contentError && <div className="error">{contentError}</div>}
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
