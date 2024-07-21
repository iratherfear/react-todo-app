import { useParams, Link } from 'react-router-dom'
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useState } from 'react';
import { useAuth } from './security/AuthProvider';

export default function WelcomeComponent() {
    const {username} = useParams()
    const [message, setMessage] = useState(null)
    const authContext = useAuth()

    function callHelloWorldApi() {
        retrieveHelloWorldPathVariable(username, authContext.token)
            .then( (response) => successfulResponse(response) )
            .catch( (error) => console.log(error) )
    }

    function successfulResponse(response) {
        setMessage(response.data)
    }

    return (
        <div>
            <h1>
                Welcome {username}
            </h1>            
            Manage your todos <Link to="/todos">here....</Link>
            <div>
                <button className='btn btn-success' onClick={ callHelloWorldApi }>    
                    API Call
                </button>
                <div className='text-info'>
                    { message }
                </div>
            </div>
        </div>
    )
}
