import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({first_name:"", last_name:"", email:""})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((res)=>(
            setUser(res.data.data)
        ))

        .catch((err)=>
            alert("User not found:", err)
        )
    }, [id])


    const handleUpdate = async() =>{
        await axios.put(`https://reqres.in/api/users/${id}`, user);
        navigate('/users')
    }
    
    return (
        <div class="container mt-5 center_div">
            <form class='form'>
                <h4 class="text-center">Edit User</h4>
                <div className='mt-4'>
                    <div class="mb-3">
                        <label for="firstname" class="form-label login-lable">First Name</label>
                        <input type="text" value={user.first_name} class="form-control" id="firstname"
                            onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
                    </div>
                    
                    <div class="mb-3">
                        <label for="lastname" class="form-label login-lable">Last Name</label>
                        <input type="text" value={user.last_name} class="form-control" id="lastname"
                            onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                    </div>    
                    
                    <div class="mb-3">
                        <label for="email" class="form-label login-lable">Email</label>
                        <input type="email" value={user.email} class="form-control" id="email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <button onClick={handleUpdate} class="btn btn-success w-100 update">Update</button>
                </div>
            </form>
        </div>
  )
}

export default UpdateUser
