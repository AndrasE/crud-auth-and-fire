import React from "react";


function PopupOtp(props) {
    return (props.trigger) ? (
        <div className="otp">
            {props.children}
        </div>
    ) : "";
}

export default PopupOtp;