import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

import './TodoApp.css'

import WelcomeComponent from './WelcomeComponent'
import { ErrorComponent } from './ErrorComponent'
import { LogoutComponent } from './LogoutComponent'
import { HeaderComponent } from './HeaderComponent'
import { ListTodosComponent } from './ListTodosComponent'
import { LoginComponent } from './LoginComponent'
import AuthProvider from './security/AuthProvider'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={< LoginComponent /> } />     
                        <Route path='/login' element={< LoginComponent /> } />     
                        <Route path='/welcome/:username' element={< WelcomeComponent /> } />     
                        <Route path='/welcome/:username' element={< WelcomeComponent /> } />     
                        <Route path='/todos' element = { < ListTodosComponent /> }/>
                        <Route path='/logout' element = { < LogoutComponent /> }/>
                        <Route path='*' element={< ErrorComponent /> } />     
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}