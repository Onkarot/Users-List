import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const [user, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUsers(user.filter(user => user.id !== id));
        } 
        
        catch (error) {
          console.error("Error deleting user:", error);
        }
    };
      

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }

        else{
            axios.get(`https://reqres.in/api/users?page=${page}`)
            .then((res)=>{
            setUsers(res.data.data)
        })
        }
    }, [page, navigate])

    return (
        <div className='user-list container mt-5'>
            <h2 class="text-center">Users List</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {user.map((user)=>(
                    <div key={user.id} className="user-card m-5 " style={{ width: "20%" }}>
                        <img src={user.avatar} alt={user.first_name} className="w-100"/>
                        <div class="container text-left img-info">
                            <h5><b>{user.first_name} {user.last_name}</b></h5>

                            <div className="row">
                                <div className="col-lg-6">
                                    <button onClick={()=>navigate(`/edit/${user.id}`, )} class="btn btn-secondary w-100 login-btn">
                                        Edit
                                    </button>
                                </div>

                                <div className="col-lg-6">
                                    <button onClick={() => handleDelete(user.id)} class="btn btn-danger w-100 login-btn">
                                        Delete
                                    </button>  
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList
