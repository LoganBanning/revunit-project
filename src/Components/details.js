import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Details = (props) => {
    const { id } = useParams();
    const location = useLocation()
    const { title, body } = location.state
    const [comments, setComments] = useState([]);

    useEffect(() => {
      try {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => {
          setComments(res.data);
        });
      } catch (err) {
        console.log(err)
      }
      }, [id]);


    return (
        <div>
            <div>Details for post {id} go here</div>
            <h3>{title}</h3>
            <p>{body}</p>
            <h4>Comments</h4>
            <ul>
            {comments.map(({body, email, name}) => {
              return <li key={name}>{name} : {body} - {email}</li>
            })}
            </ul>
          <Link to='/'>Back To Posts</Link>
        </div>
        
    )

};

export default Details;