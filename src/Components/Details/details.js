import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./details.css";

const Details = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const { title, body, userId } = location.state;
  const [comments, setComments] = useState([]);
  const [newBody, setNewBody] = useState([]);
  const [newName, setNewName] = useState([]);
  const [newEmail, setNewEmail] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => {
          setComments(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const handleSubmit = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        body: JSON.stringify({
          name: newName,
          body: newBody,
          email: newEmail,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        const newComment = { 
          ...JSON.parse(res.data.body),
          id: res.data.id,
         }
        setComments([...comments, newComment]);
      });
  };

  return (
    <div className="details-page">
      <h3>{title}</h3>
      <p className="details-body">{body}</p>
      <h4>Comments</h4>
      <ul className="details-comments">
        {comments.map(({ body, email, name, id }) => {
          return (
            <div key={id} className="comment-container">
              <li>{body}</li>
              <li>Name: {name}</li>
              <li>Email: {email}</li>
            </div>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Comment Here"
        onChange={(e) => {
          setNewBody(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setNewEmail(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/" className="details-link">
        Back To Posts
      </Link>
      <Link to={`/authorposts/${userId}`} className="details-link">
        More Posts By This Author
      </Link>
    </div>
  );
};

export default Details;
