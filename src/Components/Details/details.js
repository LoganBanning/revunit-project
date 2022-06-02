import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './details.css';

const Details = (props) => {
    const { id } = useParams();
    const location = useLocation()
    const { title, body } = location.state
    const [comments, setComments] = useState([]);
    const { newComment, setNewComment} = useState('');

    useEffect(() => {
      try {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => {
          setComments(res.data);
        });
      } catch (err) {
        console.log(err)
      }
      }, [id, newComment]);


    return (
        <div className='details-page'>
            <h3>{title}</h3>
            <p className='details-body'>{body}</p>
            <h4>Comments</h4>
            <ul className='details-comments'>
            {comments.map(({body, email, name}) => {
              return (
              <li key={name}>{name} : {body} - {email}</li>
                )
            })}
            </ul>
            <input type='text'
            placeHolder='Comment Here'
            onChange={(e) => {
              setNewComment(e.target.value);
            }}  />
            <button>Submit</button>
          <Link to='/' className='details-link'>Back To Posts</Link>
        </div>
        
    )

};

export default Details;