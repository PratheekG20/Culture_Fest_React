import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditUser = () => {
    let navigate=useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState({
        empName: "",
        empEmail: "",
        officeLocation: ""
    });

    const { empId, empName, empEmail, officeLocation } = user;
    const onInputChange = e => {
        setUser({ 
            ...user,
            [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/seat/user/userUpdate/${id}`, user);
        setUser({ 
            ...user,})
        console.log("Updated successfully"); 
        
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/seat/user/userprofile/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container-fluid">
            <div >
                <h2 className="text-center mb-4">Update User Profile</h2>
                <form onSubmit={e => onSubmit(e)}>
                    
                    <div className="form-group">
                        <label>Employee Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Employee name"
                            name="empName"
                            value={empName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <label>Employee Email</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="empEmail"
                            value={empEmail}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <label>Office Location</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Office Location"
                            name="officeLocation"
                            value={officeLocation}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    
                    <button className="btn btn-warning btn-block" onClick={()=>navigate(-1)}>Update Profile</button>
                </form>
            </div>
        </div>
    );
};
export default EditUser;