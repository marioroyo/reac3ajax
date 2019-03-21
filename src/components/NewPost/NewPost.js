import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        price: '1€',
        url:''
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            price: this.state.price,
            url: this.state.url
        };
        axios.post('/posts.json', data)
            .then(response => {
                alert('Saved order');
                //console.log(response);
            }).catch(error => {
                // console.log(error);
                // this.setState({error: true});
                alert('Error order');
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Nombre</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Descripción</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Precio</label>
                <select value={this.state.price} onChange={(event) => this.setState({price: event.target.value})}>
                    <option value="1€">1€</option>
                    <option value="2€">2€</option>
                 </select>
                <label>url</label>
                <input type="text" value={this.state.url} onChange={(event) => this.setState({url: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>

            </div>
        );
    }
}

export default NewPost;