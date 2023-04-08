import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const goldRing = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {goldRing}</small></p>
        </div>
    );
};

export default Special;