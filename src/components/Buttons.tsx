import React from "react";
import s from "./Counter.module.css";
export const Counter = () =>{
    return(
        <div className={s.counter}>
            <div className={s.counter_number}>0</div>
        </div>
    )
}
