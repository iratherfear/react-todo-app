
import {useState} from 'react'
import CounterButton from './CounterButton'
import ResetButton from './ResetButton'

export default function Counter() {
    
    const [count, setCount] = useState(0)

    function incrementValue(by) {
        setCount(count + by)
    }
    
    function decrementValue(by) {
        setCount(count - by)
    }

    function setValueToZero() {
        setCount(0)
    }

    return (       
        <>  
            <span className="totalCount">
                {count}
            </span>
            <CounterButton by={1} incrementMethod={incrementValue} decrementMethod={decrementValue}/>
            <CounterButton by={2} incrementMethod={incrementValue} decrementMethod={decrementValue}/>
            <CounterButton by={5} incrementMethod={incrementValue} decrementMethod={decrementValue}/>
            <ResetButton resetMethod={setValueToZero}/>
        </>
    )
}



