import React from "react";


const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <button className="click-delete" onClick={() => props.clickHandler(id)}>delete</button>
    </div>
    );
};
export default ContactCard;