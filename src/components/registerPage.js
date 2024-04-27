
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [register, setRegister] = useState([]);
  const getRegister = async () => {
    const response = await axios.get("http://localhost:8080/seat/admin/list");
    return response;
  }

  useEffect(() => {
    getRegister().then(data => {
      console.log(data);
      setRegister(data.data);
    }).catch(err => console.log(err));
  }, []);
  console.log(register);

  const navigate=useNavigate();

  return (
    <div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">adminId</th>
              <th scope="col">adminName</th>
              <th scope="col" >adminEmail</th>
              <th scope="col" >adminPassword</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {register.map(reg => (
              <tr key={reg.adminId}>
                <td>{reg.adminId}</td>
                <td>{reg.adminName}</td>
                <td>{reg.adminEmail}</td>
                <td>{reg.adminPassword}</td>
                <td><button className="btn btn-primary" onClick={()=>navigate(`/registration/edit/${reg.id}`)}>Edit User</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Register;