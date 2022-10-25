import React, { useState, useEffect }  from 'react'
import './Posts.css'
import { db } from '../config/firebase';
import { useHistory } from 'react-router';
import ImageUpload from '../image/ImageUpload';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import Post from '../post/Post';

const Posts = ({user}) => {

  const history = useHistory("");
    const [posts, setPosts] = useState([]);

    document.title = 'Facebook';

    if (user === undefined) {
        history.push("/login")
    }

    useEffect(() => {
      const refPost = collection(db, 'posts')

      const q = query(refPost, orderBy('timestamp', 'desc'))

      const fetchPost = onSnapshot(q, snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
        })));
      })
        
    }, []);

    console.log(posts)

  return (
    <div className="posts">
        <ImageUpload />
        {
            posts.map(({ id, post }) => (
              < Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} noLikes={post.noLikes} postUserId={post.uid} />
            ))
        }
    </div>
  )
}

export default Posts