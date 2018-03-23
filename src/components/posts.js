import React, { Component } from 'react';

class Posts extends Component {

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
                        <h2>{posts[key].title.rendered}</h2>
                            <p>{posts[key].content.rendered}</p>
                    </div>
                )}
                </div>
        )
    }
}


export default Posts;