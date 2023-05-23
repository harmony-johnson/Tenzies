import React, { useState } from "react";

export default function Die(props) {

    const dieClasses = `die ${props.hold ? "chosen-die" : ""}`

    return (
        <div className={dieClasses} onClick={() => props.value && props.handleClick(props.id)}>
            {props.value}
        </div>
    )
}