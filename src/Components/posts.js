import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// List the title of each post
// When the user clicks on a post navigate to the 'details' page with the correct post id

const Posts = (props) => {
  const [list, setList] = useState([]);
  console.log(list);

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
      <div>
          <h2>Posts</h2>
          <ul>
              {list.map(({ title, body, id }) => (
              <Link to={`details/${id}`} key={id} state={{ title, body }}>
                  <li>{title}</li>
              </Link>
              ))}
          </ul>
      </div>
      
  )
};

export default Posts;