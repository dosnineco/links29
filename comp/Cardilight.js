import React, { useState } from 'react';
import css from './styles/cardilight.module.css';


const Cardilight=({text})=>{
    return (
        <div className={css.cardilight}>
            {text}
        </div>
    )
}

export default  Cardilight;