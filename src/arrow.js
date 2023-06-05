import React from 'react';
import gifImage from './down.gif';

const Arrow = () => {
    return (
        <div className={"absolute bottom-0 z-negative-one"}>
            <img className={"w-[6em] z-negative-one"} src={gifImage} alt="Saved GIF" />
        </div>
    );
};

export default Arrow;
