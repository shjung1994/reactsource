import React, { useState } from 'react';

const MyButton = ({onClick, count, style}) => {

    return (
        <div>
            <button style={style} onClick={onClick}>
                Clicked "{count}"times
            </button>
        </div>
    );
};

export default MyButton;