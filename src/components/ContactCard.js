import React from "react";


const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <button className="trash"
        style={{color:"white",background:"red", marginTop:"7px"}}
         onClick={() => props.clickHandler(id)} > Trash</button>
        
    </div>
    );
};
export default ContactCard;