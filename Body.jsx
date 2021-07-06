import React from "react";

function Body(props) {
    return (
        <div>
            <span>
                <input
                    checked={props.checked}
                    type="checkbox"
                    onClick={() => {
                        props.clickHandler(props.indexOfArray);
                    }}
                />
                {props.name}
            </span>
        </div>
    );
}

export default Body;
