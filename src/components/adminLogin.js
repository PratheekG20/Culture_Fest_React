import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './adminLogin.css';

const AdminLogin =()=>{
    const [admin,setAdmin]=useState('userName:','password');
    return(
        <div>
            <h1>Admin Login Form</h1>
            <form>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
export default AdminLogin;