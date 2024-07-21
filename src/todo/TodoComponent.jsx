import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./security/AuthProvider"
import { createTodoApi, getTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useEffect, useState } from "react"
import { Form, Formik, Field, ErrorMessage } from "formik"

export function TodoComponent() {

    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const naviagte = useNavigate()

    useEffect(
        () => retrieveTodo(),
        [id]
    )

    function retrieveTodo() {
        if(id != -1) {
            getTodoApi(username, id)
            .then( response => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        if(id == -1) {
            createTodoApi(username, todo)
                .then(
                    response => {
                        naviagte('/todos')
                    }
                )
        } else {
            updateTodoApi(username, id, todo)
            .then(
                response => {
                    naviagte('/todos')
                }
            )
        }
    }

    function validate(values) {
        let errors = {}
        if(values.description.length < 5) {
            errors.description = "Enter atleast 5 characters"
        }
        if(values.targetDate == null || values.targetDate == '') {
            errors.targetDate = "Enter target date"
        }
        
        return errors;
    }

    return (
        <div>
            Enter Todo Details
            <div className="container">
                <Formik 
                    initialValues={ {description, targetDate } }  
                    enableReinitialize = {true} 
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage 
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage 
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset  className="form-group">
                                    <label> Description </label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset  className="form-group">
                                    <label >Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit" onSubmit={onSubmit}>Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}