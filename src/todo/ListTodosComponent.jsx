import { useEffect, useState } from "react";
import { getAllTodoApi, deleteTodoApi} from './api/TodoApiService'
import { useAuth } from "./security/AuthProvider";
import { useNavigate } from "react-router-dom";

export function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12);

    const authContext = useAuth()

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()
    useEffect(
        () => refreshTodos(authContext.username), []
    )

    function refreshTodos(username) {
        getAllTodoApi(username)
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi(authContext.username, id)
            .then( response => {
                setMessage(`Delete todo with id = ${id}`)
                refreshTodos(authContext.username)
            })
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    return (
        <div className="container">
            Todos
            {
                message && <div className="alert alert-warning"> {message} </div>
            }
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Done
                            </th>
                            <th>
                                Target
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>
                                        {todo.description}
                                    </td>
                                    <td>
                                        {todo.done.toString()}
                                    </td>
                                    <td>
                                        {todo.targetDate.toString()}
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={ () => updateTodo(todo.id)}>
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={ () => deleteTodo(todo.id)}>
                                            Delete
                                        </button>
                                    </td>                                    
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
            <div className="container">
                <button className="btn btn-success" onClick={() => updateTodo(-1)}>
                    Add New Todo
                </button>
            </div>
        </div>
    );
}
