import React, { useState } from 'react'
import './Userlist.css'
import { userRows } from '../../Dummydata';
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";


const Userlist = () => {
const [data,setdata]=useState(userRows)

// delete rows from table
const handledelete=(id)=>{
  setdata(data.filter(item=> item.id !==id))
}

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200 ,renderCell:(params)=>{
      return(
        <div className='userlistuser'>
          <img src={params.row.avatar} className='userlistimg' alt=''/>
          {params.row.user}

        </div>
      )
    }  },
    {field: 'email', headerName: 'Email', width: 200},
    { field: 'status', headerName: 'Status',sortable: true, width: 160},
    {field: 'transaction', headerName: 'Transactions', type: 'number', width: 90},
  {field:'action',headerName:'Action', width:150, renderCell:(params)=>{
    return(<>

    <Link to={"/user/"+params.row.id}>
         
         <button className='userlistedit'>Edit</button> </Link>

<DeleteIcon className='userlistdelete' onClick={()=>{
  handledelete(params.row.id)
      }} />
      </>
    )
  } }
  ];
  

  return (
    <div className='userlist'>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8}  rowsPerPageOptions={[5]}checkboxSelection/>
    </div>
  )
}

export default Userlist
