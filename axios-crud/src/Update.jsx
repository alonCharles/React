import React, { useEffect, useState} from 'react'
import { Link,useNavigate,useParams  } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
  // const [data, setData] = useState([]);
  const [user, setUser] = useState({
          name:'',
          email:'',
          phone:''
      })
      const navigate = useNavigate()
  const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
        .then(res => {
          setUser(res.data)
        })
        .catch(err => console.log(err))
    },[id])

    const handleSubmit = (e) => {
      e.preventDefault()
      e.preventDefault()
      axios.put('http://localhost:3000/users/' + id, user)
      .then(res => {
          console.log(res)
          navigate('/')
      })
      .catch(err => console.log(err))
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pb-5 rounded'>
                <h1>Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor='name'>Name</label>
                        <input type="text"  name='name' className='form-control' placeholder='Enter Name'
                           value={user.name} onChange={(e) => setUser({...user, name:e.target.value})} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='email'>Email</label>
                        <input type="email"  name='email' className='form-control' placeholder='Enter Email'
                            value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='phone'>Phone</label>
                        <input type="tel"  name='phone' className='form-control' placeholder='Enter Phone Number'
                           value={user.phone} onChange={(e) => setUser({...user, phone:e.target.value})} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
  )
}

export default Update
