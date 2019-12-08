import React, { useState } from 'react';

function Click(){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>
               count: {counter} 
            </p>
            <button onClick={() => setCounter(counter+1)}>カウントアップ</button>
        </div>
    )
}

export default Click;