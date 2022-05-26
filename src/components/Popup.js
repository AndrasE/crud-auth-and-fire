import React from "react";


function Popup(props) {
    return (props.trigger) ? (
        <div className="form-div update-div">
            {props.children}
        </div>
    ) : "";
}

export default Popup;