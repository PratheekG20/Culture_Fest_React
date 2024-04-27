import axios from "axios";
import React, { useState } from "react";

const Login = () => {

    const [user, setUser] = useState({
        adminId: "",
        adminPassword: "",
        adminEmail: "",
    })
    const onInputChange = name => e => {
        setUser({
            ...user, [name]: e.target.value
        })
    }
    const onSub = async (e) => {
        e.preventDefault();
        const { adminId, adminName, adminPassword, adminEmail } = user;
        const value = { adminId, adminPassword, adminEmail };
        await axios.post("http://localhost:8080/seat/admin/Adminlogin", value);
        console.log("login successfull");

    }
    

    return (

        <div className="container">
            <div >
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSub(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter id"
                            name="adminId"
                            value={user.adminId}
                            onChange={onInputChange('adminId')}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="adminPassword"
                            value={user.adminPassword}
                            onChange={onInputChange('adminPassword')}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            name="adminEmail"
                            value={user.adminEmail}
                            onChange={onInputChange('adminEmail')}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default Login;