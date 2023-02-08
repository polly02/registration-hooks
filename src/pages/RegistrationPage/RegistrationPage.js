import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./RegistrationPage.module.css"

function RegistrationPage(){
    const [form, setForm] = useState({ email: "", password: "", confirm_password: "" })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div className={style["wrapper"]}>
            <h1>REGISTRATION</h1>
            <div>
                <TextField onChange={changeForm} name='email' id="standard-basic" label="Email" variant="standard" />
            </div>
            <div>
                <TextField onChange={changeForm} name='password' id="standard-basic" label="Password" variant="standard" type="password"/>
            </div>
            <div>
                <TextField onChange={changeForm} name='confirm_password' id="standard-basic" label="Confirm password" variant="standard" type="password"/>
            </div>
            <div>
                <Button onClick={() => console.log({form})} variant="outlined" >SIGN UP</Button>
            </div>
            <p>Already have an account? <Link to="/" activeClassName='active' >SIGN IN</Link> </p>
        </div>
    )
}
export default RegistrationPage