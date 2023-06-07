import React from 'react';
import gifImage from './down.gif';

const Arrow = () => {
    return (
        <div className={" z-negative-one flex flex-col justify-center items-center"}>
            <img className={" absolute bottom-0 w-[6em] z-negative-one"} src={gifImage} alt="Saved GIF" />
        </div>
    );
};

export default Arrow;
