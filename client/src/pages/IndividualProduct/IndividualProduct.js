import React, { Component } from 'react';
import API from '../../utils/API.js';
import './style.css';
import Button from 'react-bootstrap/Button';

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class IndividualProduct extends Component {

    state = {
        product: [],
        id: this.props.location.pathname.split('/')[2],
        name: '',
        imgLink: [],
        price: 0,
        description: '',
        viewedImg: '',
        userName: '',
        userEmail: '',
        emailText: ''
    }
    
    componentDidMount(){
        this.loadProduct();
    }

    sendMessage = () => {
        let message = {
            userEmail: this.state.userEmail,
            userName: this.state.userName,
            name: this.state.name,
            text: this.state.emailText
        }

        if(message.to === '' || !re.test(this.state.userEmail)){
            alert('Please enter in a valid email address.')
            this.setState({ userEmail: '' });
        } else if (this.state.userName === ''){
            alert('Please provide your name.');
        } else {
            API.sendEmail(message)
            .then(this.setState({
                userEmail: '',
                userName: '',
                emailText: ''
            }))
            .catch(err => console.log(err))
        }
    }

    loadProduct = () => {
        API.getProduct(this.state.id)
        .then(res => this.setState({ 
            product: res.data, 
            name: res.data[0].name, 
            imgLink: res.data[0].imgLink, 
            price: res.data[0].price, 
            description: res.data[0].description, 
            viewedImg: res.data[0].imgLink[0] 
        }))
        .catch(err => console.log(err))
    }

    imgChanger = (event) => {
        const { src } = event.target;
        this.setState({ viewedImg: src });
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                <div className="indProductContainer">
                    <div className="indProductImgs">
                        <img className="indProductFirstImg" src={this.state.viewedImg} alt="product"></img>
                        <div className="indProductImgRow">
                            {this.state.imgLink.map(img => {
                                return <img src={img} alt="product-thumb" className="indProductImgThumb" value={img} onClick={this.imgChanger}></img>
                            })}
                        </div>
                    </div>
                    <div className="indProductInfo">
                        <h1 className="indProductName">{this.state.name}</h1>
                        <h4>${this.state.price}</h4>
                        <h6>{this.state.description}</h6>
                    </div>
                </div>
                <div>
                    <label for="userName">Name (required):</label>
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleInput}></input>
                    <label for="userEmail">Email (required):</label>
                    <input type="text" name="userEmail" value={this.state.userEmail} onChange={this.handleInput}></input>
                    <label for="emailText">Message (optional):</label>
                    <textarea type="text" name="emailText" value={this.state.emailText} onChange={this.handleInput}></textarea>
                    <Button variant="outline-dark" onClick={this.sendMessage}>Request A Quote</Button>
                </div>
            </div>
        );
    }
}

export default IndividualProduct;