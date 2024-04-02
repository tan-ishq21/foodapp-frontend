import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./login.css"

const Login = () => {

    const [credentials, setCredentials] = useState({ email:"", password:""})
    let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/loginuser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ email: credentials.email, password:credentials.password })
        });
        const json = await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter Valid Credentials");
        }
        if(json.success){
            localStorage.setItem("authToken" , json.authToken);
            localStorage.setItem("userEmail" , credentials.email);
            console.log(localStorage.getItem("authToken"));
            console.log(localStorage.getItem("userEmail"));
            navigate("/");
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <>
        <Navbar />
        <div className="container1 login-page">
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder="Email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder="Password..." className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="m-3 btn btn-success">Login</button>
                <Link to="/createuser" className="m-3 btn btn-danger">New User</Link>
            </form>
        </div>

        <Footer />
        </>
    );
};

export default Login;