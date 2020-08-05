import React from 'react';
import './blink.css';

class Blink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : true
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);  
    }

    tick(){
        this.setState({
            show : !this.state.show
        })
    }

    renderBlinkVisible(){
        return(
            <div className="blinkCursor"></div>
        )
    }

    render(){
        return(
            <div>
                {this.state.show ? this.renderBlinkVisible() : ""}
            </div>
        )
    }

}

export default Blink;