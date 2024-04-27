import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const BookSeat = () => {
    let navigate=useNavigate()
    const { id } = useParams();
    const [seat, setSeat] = useState({
        empId:""
    });

    const { empId } = seat;
    const onInputChange = e => {
        e.preventDefault();
        setSeat({ 
            
            // [e.target.status]: e.target.false,
            [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit=async (e)=>{
        e.preventDefault();
        // await axios.put(`http://localhost:8080/seat/user/BookSeat/${id}/${empId}`, seat);
        await axios.put(`http://localhost:8080/seat/user/BookSeat/${id}${empId}`, seat);
        setSeat({ 
            ...seat
        })
        console.log("Booked successfully"); 
        
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/seat/user/${id}`);
        setSeat(result.data);
        console.log(result);
    };
    return (
        <div className="container">
            {/* <div className="w-200 mx-auto shadow p-5"> */}
                <h2 className="text-center mb-4">Booking</h2>
                <form onSubmit={e => onSubmit(e)}>
                   
                    
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Emp Id"
                            name="empId"
                            value={empId}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    \
                    <button className="btn btn-warning btn-block" >Confirm Book</button>
                </form>
            </div>
        // </div>
    );
};
export default BookSeat;