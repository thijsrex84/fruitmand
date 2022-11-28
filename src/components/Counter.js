import React from 'react';

function Counter({fruitValue,fruitName,type,addOne,deductOne,isDisabled,className,classNameTwo}) {
    return (
        <div>
            <h2>{fruitName}</h2>
            <button
                type={type}
                onClick={addOne}
                className={className}



            >+1</button>
            {fruitValue}
            <button
                type={type}
                onClick={deductOne}
                disabled={isDisabled}
                className={classNameTwo}

            >-1</button>
        </div>
    );
}

export default Counter;