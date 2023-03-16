import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';
import Slider from './Slider';
import '../index.css';

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi quis odio bibendum aliquet. Maecenas vel tortor sed nulla venenatis eleifend.',
    },
    {
      id: 2,
      title: 'Second post',
      content: 'Nulla quis lectus velit. Pellentesque vel magna auctor, dictum justo vel, commodo magna. Donec sit amet sodales urna.',
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Slider></Slider>
      <h2 className='home'>Home</h2>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
      <AddPost onAddPost={addPost} />
    </div>
  );
}

export default Home;
