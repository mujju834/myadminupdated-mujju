import React, { useState } from 'react'
import './Productlist.css'
import {ProductRows } from '../../Dummydata';
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";

const Productlist = () => {
    const[data,setdata]=useState(ProductRows)

// delete rows from table
const handledelete=(id)=>{
    setdata(data.filter(item=> item.id !==id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Product', headerName: 'Product', width: 200 ,renderCell:(params)=>{
      return(
        <div className='productlistitem'>
          <img src={params.row.img} className='productlistimg' alt=''/>
          {params.row.name}
        </div>
      )
    }  },
    {field: 'stock', headerName: 'stock', width: 200},
    { field: 'status', headerName: 'Status',sortable: true, width: 160},
    {field: 'Price', headerName: 'Price', type: 'number', width: 90},
  {field:'action',headerName:'Action', width:150, renderCell:(params)=>{
    return(<>

    <Link to={"/product/"+params.row.id}>
         
         <button className='productlistedit'>Edit</button> </Link>

<DeleteIcon className='productlistdelete' onClick={()=>{
  handledelete(params.row.id)
      }} />
      </>
    )
  } }
  ];

    return (
    <div className='productlist'>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8}  rowsPerPageOptions={[5]}checkboxSelection/>

    </div>
  )
}

export default Productlist
