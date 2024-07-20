import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo MGMT app
            <LoginComponent/>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    
    function hanldePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(username === 'iratherfear') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            {showSuccessMessage && <div className="ShowSuccess">Authentication Successful</div>}
            {showErrorMessage && <div className="ShowSuccess">Authentication Failed</div>}

            <div className="LoginForm">
                <div>
                    <input type="text" name="username" placeholder="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" value={password} onChange={hanldePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>LOGIN</button>
                </div>
            </div>  
        </div>
    )
}