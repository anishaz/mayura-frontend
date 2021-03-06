import React, { Component } from 'react';
import client from '../../client';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    // Replace with client('local')
    // for local dev setup
    const dataURL = client('local');
    const fetchForThisComponent = `${dataURL}wp/v2/posts`;
    fetch(fetchForThisComponent)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          posts: res,
        });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="posts">
        {Object
          .keys(posts)
          .map(key =>
            (<div key={key} className={`post post-${key}`}>
              <div className="post-title">
                <h2>{posts[key].title.rendered}</h2>
              </div>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: posts[key].content.rendered }}
              />
            </div>))
        }
      </div>
    );
  }
}


export default Post;
