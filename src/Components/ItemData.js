import React from 'react';
import './ItemData.scss';

function ItemData (props) {
  
    return (
        <div className="Details-grid">
            <h5 className="grid-item">{props.id}</h5>
            <h5 className="grid-item">{props.name}</h5>
            <h5 className="grid-item">{props.model}</h5>
        </div>
    )
}

export default ItemData;