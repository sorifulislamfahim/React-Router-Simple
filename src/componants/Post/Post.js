import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title, body} = post;
    // console.log(post);

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Visite: {id}</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <Link onClick={handleNavigate}><button>Button 2 Handle</button></Link>
        </div>
    );
};

export default Post;