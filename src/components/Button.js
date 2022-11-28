import React from 'react';

function Button({className,onclick}) {
    return (
        <div>
            <button
                className={className}
                onClick={onclick}>
            </button>

        </div>
    );
}

export default Button;