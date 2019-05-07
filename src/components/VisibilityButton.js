
import React from 'react';

function VisibilityButton({handleClickAll, handleClickCaught, handleClickUncaught, label}) {
    return(
        <div>
            <button onClick={handleClickAll}>{label}</button>
            <button onClick={handleClickCaught}>{label}</button>
            <button onClick={handleClickUncaught}>{label}</button>
        </div>
    );
}

export default VisibilityButton;