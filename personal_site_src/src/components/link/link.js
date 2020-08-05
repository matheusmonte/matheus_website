import React from 'react';
import './link.css';

class Link extends React.Component{

    colors = ["red","blue","gray", "orange"];

    constructor(props){
        super(props);
        this.state = {
            color : this.getColor()
        }   
    }

    componentDidMount() {
        setInterval(() => this.changeColor(), 2000);  
    }

    changeColor(){
        this.setState({
            color : this.getColor()
        });
    }

    getColor(){
        return this.colors[Math.floor((Math.random() * 4))];
    }

    render(){
        return(
            <a  className={this.state.color} href={this.props.source}> {this.props.text}</a>
        )
    }
}

export default Link;