import { useState } from 'react';
import '../customStyles/counterComponentStyles.css';
import CounterButton from './CounterBtn.js';

function CounterApp() {
    const [counterValue, setCounter] = useState(0);

    const counterStyle = {
        color: counterValue < 0 ? 'red' : (counterValue === 0 ? 'black' : 'green')
    };

    function incrementCount() {
        setCounter(counterValue + 1);
    }

    function decrementCount(){
        setCounter(counterValue - 1);
    }

    function resetCount() {
        setCounter(0);
    }

    return (
        <div className='container'>
            <h3> Counter App </h3>
            <p style={counterStyle} id="counter">{counterValue}</p>
            <div>
                <CounterButton
                className='incrementBtn'
                title="Increment"
                action={incrementCount}/>
                <CounterButton
                className='resetBtn'
                title="Reset"
                action={resetCount}/>
                <CounterButton
                className='decrementBtn'
                title="Decrement"
                action={decrementCount}/>
            </div>

        </div>
    )
}

export default CounterApp;