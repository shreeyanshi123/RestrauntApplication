import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const BlogDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching the blog:', error);
      }
    };

    fetchBlog();
  }, [id]);


  if (!blog.title) return <div>Loading...</div>;
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const handleSubmit =async (e) => {
    navigate(-1);
  }

  return (


    <div className="blog-outer">
      <div className="blog-display">

        <h1 className="title">{blog.title}</h1>
        <p>Posted on: {formatDate(blog.createdAt)}</p> 
        {blog.updatedAt && (
          <p>Last updated: {formatDate(blog.updatedAt)}</p> 
        )}

        <div className="blog-image">
          <h6>
            {blog.description}
          </h6>
          <Image
            src={`data:${blog.image?.contentType};base64,${btoa(
              new Uint8Array(blog.image?.data.data)
                .reduce((data, byte) => data + String.fromCharCode(byte), '')
            )}`}
            fluid
            alt={blog.title} className='hello'
          />
        </div>

        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
        <Button type='submit' onClick={handleSubmit}>Go Back!</Button>
      </div>

      
    </div>


  );
};

export default BlogDetails;
