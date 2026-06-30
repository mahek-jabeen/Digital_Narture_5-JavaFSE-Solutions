import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const posts = data.map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts });
      })
      .catch((error) => {
        console.error('Error loading posts:', error);
        alert('Failed to load posts. Please try again later.');
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred while rendering the posts.');
    console.error('Rendering error:', error);
    console.error('Component stack:', info.componentStack);
  }

  render() {
    const { posts } = this.state;

    return React.createElement(
      'div',
      { style: { padding: '20px', fontFamily: 'Arial, sans-serif' } },
      React.createElement('h2', null, 'Blog Posts'),
      ...posts.map((post) =>
        React.createElement(
          'div',
          { key: post.id },
          React.createElement('h3', null, post.title),
          React.createElement('p', null, post.body),
          React.createElement('hr', null)
        )
      )
    );
  }
}

export default Posts;
