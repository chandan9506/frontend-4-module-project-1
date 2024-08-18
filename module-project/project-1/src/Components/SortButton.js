import React from 'react';

const SortButton = ({ onClick, label }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default SortButton;