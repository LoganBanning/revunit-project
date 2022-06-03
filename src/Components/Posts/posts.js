import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
      <div className='post-page'>
          <h2 className="post-title">Posts</h2>
          <ul className='all-posts'>
              {list.map(({ title, body, id, userId }) => (
              <Link to={`details/${id}`}
              key={id}
              state={{ title, body, userId }}
              className='post-list'>
                  <li>{title}</li>
              </Link>
              ))}
          </ul>
      </div>
  )
};

export default Posts;