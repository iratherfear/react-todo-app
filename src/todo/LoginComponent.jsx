import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

export function LoginComponent() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function hanldePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">
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
