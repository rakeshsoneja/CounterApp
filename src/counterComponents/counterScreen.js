import { useState } from 'react';
import '../customStyles/counterComponentStyles.css';

function CounterApp() {
    const [counterValue, setCounter] = useState(0);

    const counterStyle = {
        color: counterValue < 0 ? 'red' : 'white',
    };

    function incrementCount() {
        setCounter(counterValue + 1)
    }

    function decrementCount(){
        setCounter(counterValue - 1);
    }

    function resetCount() {
        setCounter(0);
    }

    return (
        <div>
            <p style={counterStyle}>{counterValue}</p>
            <div>
                <button class="decrementBtn" onClick={decrementCount}>Decrement</button>
                <button class="resetBtn" onClick={resetCount}>Reset</button>
                <button class="incrementBtn" onClick={incrementCount}>Increment</button>
            </div>
        </div>
    )
}

export default CounterApp;