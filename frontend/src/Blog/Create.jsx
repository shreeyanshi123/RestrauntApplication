import React, { useState } from 'react';
import CustomNavbar from '../Components/CustomNavbar';
import Form from 'react-bootstrap/Form';
import './Blog.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const Create = () => {
    const [title, setTitle] = useState('');
    const [des, setDesc] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', des);
        formData.append('content', content);
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:8000/create-blog', {
                method: 'POST',
                body: formData,
                credentials: 'include',  
            });

            if (response.ok) {
                alert('Blog created successfully!');
                setTitle('');
                setContent('');
                setImage(null);
                setDesc('');

                navigate('/blogs');

            }
            else if (response.status === 401) {
                // Added handling for unauthorized access (user not logged in)
                alert('You are not logged in. Redirecting to login...');
                navigate('/login'); // Redirect to the login page
            } else {
                alert('Failed to create blog');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the blog');
        }
    };

    return (
        <>
            <CustomNavbar />

            <div className="outer-blog-container">
                <div className="blog-container">
                    <Form className="blog-form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Description"
                                value={des}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Enter Your Text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Label>Upload an Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </Form.Group>

                        <Button variant="primary" className="mt-3" type="submit">
                            Upload
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Create;
