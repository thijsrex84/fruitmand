import React from 'react';

function Formlabels({labelname,type,value,setState,className}) {
    return (
        <div>
            <label>{labelname}
            <input
            type={type}
            value={value}
            onChange={(event)=>setState(event.target.value)}
            className={className}/>
            </label>
        </div>
    );
}

export default Formlabels;