import { TextField, Button } from '@mui/material'
import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import style from "./LoginPage.module.css"

function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Header></Header>
            <div className={style["wrapper"]}>
                <h1>LOGIN</h1>
                <div>
                    <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />
                </div>
                <div>
                    <TextField onChange={changeForm} name='password' id="standard-basic" label="Password" variant="standard" type="password" />
                </div>
                <div>
                    <Button onClick={() => { console.log({ form }); alert("success") }} variant="outlined" >SIGN IN</Button>
                </div>
                <p>Don't you have an account? <Link to="/reg" >SIGN UP</Link> </p>
            </div>
        </>
    )
}
export default LoginPage