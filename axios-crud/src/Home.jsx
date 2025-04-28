import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure?")
    if(confirm) {
        axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
            Location.reload()
        })
        .catch(err => console.log(err))
    }
    }
    console.log(data)
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150'>
        <h1>List of Users</h1>
        <div className="w-75 rounded bg-white boder shadow p-4">
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    { 
                        data.map((d,i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info'>Details</Link>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={()=> handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ) ) 
                    }
                </tbody>
            </table>
        </div>
      
    </div>
  )

}

export default Home
