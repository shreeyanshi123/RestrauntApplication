import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Blog.css'; // Optional: Add custom styles
import { Link } from 'react-router';

const Display = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8000/blogs'); 
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data); 
                } else {
                    console.error('Failed to fetch blogs');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <div className="blog-list-container">
                {blogs.map((blog) => (
                    <Card key={blog._id} className="blog-card">
                        <Card.Img
                            variant="top"
                            src={`data:${blog.image.contentType};base64,${btoa(
                                new Uint8Array(blog.image.data.data)
                                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                            )}`}
                            alt={blog.title}
                        />
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>{(blog.content).slice(0,100)}
                                 <Link to={`/blog/${blog._id}`}>Read more....</Link>
                                 </Card.Text>
                        </Card.Body>
                       
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Display;
