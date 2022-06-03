import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../Posts/posts.css';

const AuthorPosts = (props) => {
  const { userId } = useParams();
  // const location = useLocation();
  // const { id } = location.state;
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        setList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  return (
      <div className='post-page'>
          <h2 className="post-title">Posts</h2>
          <ul className='all-posts'>
              {list.map(({ title, body, id }) => (
              <Link to={`/details/${id}`}
              key={id}
              state={{ title, body, userId }}
              className='post-list'>
                  <li>{title}</li>
              </Link>
              ))}
          </ul>
          <Link to='/' className='details-link'>Back To Posts</Link>
      </div>
      
  )
};

export default AuthorPosts;