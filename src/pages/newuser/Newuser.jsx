import React from 'react'
import './Newuser.css'

const Newuser = () => {
  return (
    <div className='newuser'>
<h1 className="newusertitle">New User</h1>      
<form  className="newuserform">
  <div className="newuseritem">
    <label htmlFor="">Username</label>
    <input type="text" placeholder='mujju' id="" />
  </div>
  <div className="newuseritem">
    <label htmlFor="">Full Name</label>
    <input type="text" placeholder='mujju maze' id="" />
  </div>
  <div className="newuseritem">
    <label htmlFor="">Email</label>
    <input type="email" placeholder='mujju@gmail.com' id="" />
  </div>
  <div className="newuseritem">
    <label htmlFor="">Password</label>
    <input type="password" placeholder='password' id="" />
  </div>
  <div className="newuseritem">
    <label htmlFor="">Phone</label>
    <input type="number" placeholder='+1 32344 44 ' id="" />
  </div>
  <div className="newuseritem">
    <label htmlFor="">Address</label>
    <input type="text" placeholder='Rio de janeiro' id="" />
  </div>
  <div className="newuseritem">
    <label >Gender</label>
    <div className="newusergender">
    <input type="radio" name='gender'  value='male' />
    <label for="male">Male</label>
  
    <input type="radio" name='gender'  value='female' />
    <label for="female">Female</label>
     <input type="radio" name='gender'  value='others' />
    <label for="others">Others</label>
    </div>
  </div>

  <div className="newuseritem">
    <label >Active</label>
    <select name="active" id="active" className="newuserselect">
      <option value='yes' >Yes</option>
      <option value='No' >No</option>
    </select>
  </div>
  <button className="newuserbutton">Create</button>
</form>
    </div>
  )
}

export default Newuser
