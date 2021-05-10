import React from 'react'
import { render } from 'react-dom'
import LoginForm from './LoginForm'


const App = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

render(<App />, document.getElementById("root"))