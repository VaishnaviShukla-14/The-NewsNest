import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';

const BlogNews = () => {
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);
    const [name, setName] = useState(Cookies.get('name') || ''); // Retrieve name from cookies
    const [commentText, setCommentText] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/blog');
                if (response && response.data) {
                    const processedBlogs = response.data.map(blog => ({
                        ...blog,
                        likes: blog.likes || 0,
                        dislikes: blog.dislikes || 0,
                        likedBy: blog.likedBy || [],
                        dislikedBy: blog.dislikedBy || [],
                    }));
                    setBlogs(processedBlogs);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/comment');
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    const handleLike = async (_id) => {
        const updatedBlogs = [...blogs];
        const blogIndex = updatedBlogs.findIndex(blog => blog._id === _id);
        const alreadyLiked = updatedBlogs[blogIndex].likedBy.includes(name);
        const alreadyDisliked = updatedBlogs[blogIndex].dislikedBy.includes(name);

        if (!alreadyLiked && !alreadyDisliked) {
            updatedBlogs[blogIndex].likes += 1;
            updatedBlogs[blogIndex].likedBy.push(name);
            setBlogs(updatedBlogs);
            try {
                await axios.post(`http://localhost:3001/api/blog/${_id}/like`, { name });
            } catch (error) {
                console.error('Error updating like:', error);
            }
        }
    };

    const handleDislike = async (_id) => {
        const updatedBlogs = [...blogs];
        const blogIndex = updatedBlogs.findIndex(blog => blog._id === _id);
        const alreadyLiked = updatedBlogs[blogIndex].likedBy.includes(name);
        const alreadyDisliked = updatedBlogs[blogIndex].dislikedBy.includes(name);

        if (!alreadyLiked && !alreadyDisliked) {
            updatedBlogs[blogIndex].dislikes += 1;
            updatedBlogs[blogIndex].dislikedBy.push(name);
            setBlogs(updatedBlogs);
            try {
                await axios.post(`http://localhost:3001/api/blog/${_id}/dislike`, { name });
            } catch (error) {
                console.error('Error updating dislike:', error);
            }
        }
    };

    const handleCommentSubmit = async () => {
        if (name.trim() === '' || commentText.trim() === '') return;
        try {
            await axios.post('http://localhost:3001/api/comment', { name, comment: commentText });
            fetchComments();
            setCommentText('');
            setShowDialog(false);
            setSuccessAlert(true);
            setTimeout(() => {
                setSuccessAlert(false);
            }, 3000);
        } catch (error) {
            console.error('Error submitting comment:', error);
            setErrorAlert(true);
            setTimeout(() => {
                setErrorAlert(false);
            }, 3000);
        }
    };

    const handleToggleShowDialog = () => {
        setShowDialog(prevState => !prevState);
    };

    const handleToggleShowComments = () => {
        setShowComments(prevState => !prevState);
    };

    const handleCloseComments = () => {
        setShowComments(false);
    };

    const formatDate = (date) => {
        // Implement your logic to format date/time difference here
    };

    const BlogCard = ({ blog }) => (
        <Card style={styles.card}>
            <div style={styles.mediaContainer}>
                {blog.video ? (
                    <video src={`http://localhost:3001/${blog.video}`} style={styles.media} controls />
                ) : (
                    <img src={`http://localhost:3001/${blog.image}`} alt="Blog" style={styles.media} />
                )}
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{blog.title}</h3>
                <p style={styles.article}>{blog.article}</p>
                <div style={styles.buttonContainer}>
                    <Button onClick={() => handleLike(blog._id)} style={styles.button}>
                        Like ({blog.likes})
                    </Button>
                    <Button onClick={() => handleDislike(blog._id)} style={styles.button}>
                        Dislike ({blog.dislikes})
                    </Button>
                    <Button onClick={handleToggleShowDialog} style={styles.button}>
                        Add Comment
                    </Button>
                    <Button onClick={handleToggleShowComments} style={styles.button}>
                        {showComments ? 'Hide Comments' : 'Show Comments'}
                    </Button>
                </div>
                {showComments && (
                    <div style={styles.commentContainer}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Button
                                style={{ position: 'absolute', top: 0, right: 0 }}
                                icon={<CloseOutlined />}
                                onClick={handleCloseComments}
                            />
                            {comments.map((comment) => (
                                <div key={comment._id} style={styles.comment}>
                                    <p>{comment.name} - {formatDate(comment.createdAt)}</p>
                                    <p>{comment.comment}</p>
                                </div>
                            ))}
                        </Space>
                    </div>
                )}
            </div>
            <Modal
                visible={showDialog}
                title="Add Comment"
                onCancel={handleToggleShowDialog}
                footer={[
                    <Button key="cancel" onClick={handleToggleShowDialog}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleCommentSubmit}>
                        Submit
                    </Button>
                ]}
            >
                <div>
                    <h3>Type your comment</h3>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled // Disable editing of name
                    />
                    <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        style={{ height: '200px', resize: 'vertical' }} // Allow vertical resizing
                    />
                </div>
            </Modal>
        </Card>
    );

    return (
        <div style={styles.blogContainer}>
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    );
};

const styles = {
    blogContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        marginBottom: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    mediaContainer: {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        overflow: 'hidden',
    },
    media: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    content: {
        padding: '20px',
        position: 'relative', // Required for absolute positioning of close button
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
        color: '#333',
    },
    article: {
        fontSize: '16px',
        color: '#666',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    button: {
        marginRight: '10px',
    },
    commentContainer: {
        position: 'relative', // Required for absolute positioning of close button
        maxHeight: '200px', // Limit height for scrolling
        overflowY: 'auto', // Enable vertical scrolling
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginTop: '10px',
    },
    comment: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
};

export default BlogNews;
