import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SeatDetails = () => {
    const [seat, setSeat] = useState([]);
    const getRegister = async () => {
        const response = await axios.get("http://localhost:8080/seat/admin/getAllSeats");
        return response;
    }

    useEffect(() => {
        getRegister().then(data => {
            console.log(data);
            setSeat(data.data);
        }).catch(err => console.log(err));
    }, []);
    console.log(seat);

    const deleteSeat= (id)=>{
        setSeat(
            ...seat,
        )
    }


    let navigate=useNavigate();

    return (
        <div className="container">
            <div className='py-4'>
                <table class="table border">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Seat Id</th>
                            <th scope="col">Location</th>
                            <th scope="col" >Floor</th>
                            <th scope="col" >Status</th>
                            <th scope="col">Emp ID</th>
                            <th scope='col'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {seat.map(m => (
                            <tr key={m.seatId}>
                                <td>{m.seatId}</td>
                                <td>{m.location}</td>
                                <td>{m.floor}</td>
                                <td>{m.status===true?"Available":"Booked"}</td>
                                <td>{m.empId}</td>
                                <td>
                                    <button className='btn btn-outline-primary mr-5 ' onClick={()=>navigate(`/getAllSeats/${m.seatId}`)}> Book</button>
                                    <button className='btn btn-outline-danger mr-5' onClick={()=>deleteSeat(m.seatId)}> Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SeatDetails;