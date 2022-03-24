import React from "react";

export default function Die({isHeld, holdDie, value}) {
    return (
        <div onClick={()=>holdDie()} className={`die ${isHeld ? 'hold' : 'free'}`}>
            {value}
        </div>
    );
}
