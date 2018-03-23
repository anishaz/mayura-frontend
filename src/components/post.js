import React, { Component } from 'react';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        let dataURL = "http://mayura-server:8888/wp-json/wp/v2/posts";
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
    }
    render() {
        let { posts } = this.state;
        return (
                <div className="posts">
                {Object
                    .keys(posts)
                    .map(key => 
                    <div key={ key } index = { key } className="post">
                        <div className="post-title">
                            <h2>{posts[key].title.rendered}</h2>
                        </div>
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: posts[key].content.rendered }} />
                    </div>
                )}
                </div>
        )
    }
}


export default Post;