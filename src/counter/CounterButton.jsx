import './CounterButton.css'
import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

    function incrementFunction() {
        incrementMethod(by)
    }

    function decrementFunction() {
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={decrementFunction} >
                    -{by}
                </button>
                <button className="counterButton" onClick={incrementFunction} >
                    +{by}
                </button>
            </div>
        </div>
    )
}


CounterButton.propTypes = {
    by: PropTypes.number
}