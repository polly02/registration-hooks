import { TextField, Button } from '@mui/material'
import { useState } from "react"
import { Link } from 'react-router-dom'
import style from "./LoginPage.module.css"

function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className={style["wrapper"]}>
            <h1>LOGIN</h1>
            <div>
                <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />
            </div>
            <div>
                <TextField onChange={changeForm} name='password' id="standard-basic" label="Password" variant="standard" type="password"/>
            </div>
            <div>
                <Button onClick={() => console.log({form})} variant="outlined" >SIGN IN</Button>
            </div>
            <p>Don't you have an account? <Link to="/reg" activeClassName='active' >SIGN UP</Link> </p>
        </div>
    )
}
export default LoginPage