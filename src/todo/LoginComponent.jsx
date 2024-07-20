import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginComponent() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function hanldePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (password === 'test') {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
            {showSuccessMessage && <div className="ShowSuccess">Authentication Successful</div>}
            {showErrorMessage && <div className="ShowSuccess">Authentication Failed</div>}

            <div className="LoginForm">
                <div>
                    <input type="text" name="username" placeholder="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" value={password} onChange={hanldePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>LOGIN</button>
                </div>
            </div>
        </div>
    );
}
