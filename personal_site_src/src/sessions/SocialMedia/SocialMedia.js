import React from "react";
import Link from "../../components/link/link";
import './SocialMedia.css';

class SocialMedia extends React.Component{
    render(){
        const listItems = this.props.content.map((element) => <Link source={element.link} text={element.title} />);
        return(
            <div className="socialmedia_container">
                <div className="socialmedia_link_spot">
                    {listItems}
               </div>
            </div>
        )
    }
}

export default SocialMedia;