import React, { useContext, useState } from 'react'
import './delete.css'
import Nav from './Nav'
import { AuthContext } from './AuthContext'

const DeleteProject = () => {
  const {auth} = useContext(AuthContext)
  const [name, setName] = useState('')
  const handleDelete = ()=> {
    
fetch(`https://portfolio-ekene-40c3fd1f58b7.herokuapp.com/delete/project/${name}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers if needed
  },
})
  .then(response => {
    return response.json(); // Optionally parse response body as JSON
  })
  .then(data => {
    alert('Item deleted successfully:');
    setName('')
  })
  .catch(error => {
    alert(`An error occured: ${error?.message}`);
    console.log(error)
  });

  }
  return (
    <>

    
   { auth && <div className='del-wrapper'>
     <Nav/>
    <h2>Delete project</h2>
    <div className='del-input-group'>
      <label htmlFor="del">Project Name</label>
      <input onChange={(e)=>setName(e.target.value)} className='del-input' placeholder='Enter project name all in small letters' type="text" />
    </div>
    <button onClick={handleDelete} className='del-btn'>Delete</button>

    </div>}
    </>
  )
}

export default DeleteProject