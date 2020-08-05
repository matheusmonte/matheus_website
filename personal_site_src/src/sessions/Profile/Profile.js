import React from 'react';
import Image from "../../components/image/Image";
import Blink from "../../components/blink/blink";
import './Profile.css';


class Profile extends React.Component{
    render(){
        return(
            <div className="profile_container">
                <div className="profile_image_container">
                    <Image style={{cssClass : "profile_image"}} src={this.props.content.image} alt="Avatar"/>
                </div>
                <div className="profile_text_container">
                    <p className="profile_text_introduce">{this.props.content.text.introduce}</p>
                    <div className="profile_text_sub_introduce_container">
                        <p>{this.props.content.text.subintroduce}</p>
                        <Blink />
                    </div>
                    <p className="profile_text_bio">{this.props.content.text.bio}</p>
                </div>
                
            </div>
        )
    }
}

export default Profile;