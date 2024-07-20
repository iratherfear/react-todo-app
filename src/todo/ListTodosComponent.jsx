export function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12);

    const todos = [
        { id: 1, description: "Learn java", done: false, targetDate: targetDate },
        { id: 2, description: "Learn react", done: false, targetDate: targetDate },
        { id: 3, description: "Learn c++", done: false, targetDate: targetDate },
        { id: 4, description: "Learn cp", done: false, targetDate: targetDate }
    ];

    return (
        <div className="container">
            Todos
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                Description
                            </td>
                            <td>
                                Done
                            </td>
                            <td>
                                Target
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>
                                        {todo.id}
                                    </td>
                                    <td>
                                        {todo.description}
                                    </td>
                                    <td>
                                        {todo.done.toString()}
                                    </td>
                                    <td>
                                        {todo.targetDate.toDateString()}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
