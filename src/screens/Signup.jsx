import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./signup.css";

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", location:""})

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('https://foodapp-backend-8g5e.onrender.com/api/createuser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name: credentials.name, email: credentials.email, password:credentials.password, location:credentials.location})
        });
        const json = await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter Valid Credentials");
        }
        if(json.success){
            alert("ID Created!! Login using your credentials");
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
        <Navbar />
        <div className="container1 signup-page">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" placeholder="Name" className="form-control" name="name" value={credentials.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder="Email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder="Password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" placeholder="Address" className="form-control" name="location" value={credentials.location} onChange={onChange} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
            </form>
        </div>

        <Footer />
        </>
    );
};

export default Signup;