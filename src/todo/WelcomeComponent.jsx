
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

export default function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div>
            <h1>
                Welcome {username}
            </h1>            
            Manage your todos <Link to="/todos">here....</Link>
        </div>
    )
}
