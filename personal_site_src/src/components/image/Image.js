import React from 'react';


const resources = require.context('../../resources', true);

class Image extends React.Component{
    render(){
        return(
            <img className={this.props.style.cssClass} src={resources("./" + this.props.src)} alt={this.props.alt} />
        );
    }
}

export default Image;   