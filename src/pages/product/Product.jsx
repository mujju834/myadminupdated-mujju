import React from 'react'
import './Product.css'
import Chart from '../../components/chart/Chart'
import { productdata } from '../../Dummydata'
import Publish from '@mui/icons-material/Publish'

const Product = () => {
  return (
    <div className='product'>
<div className="producttitlecontainer">
    <h1 className="producttitle">
        Product
    </h1>
    <button className="productaddbutton">Create</button>
</div>

<div className="producttop">
    <div className="producttopleft">
        <Chart data={productdata} dataKey='sales' title='sales performance' />
    </div>
    <div className="producttopright">
        <div className="productinfotop">
            <img src="/images/beach.jpg" alt="" className="productinfoimg" />
        <span className="productname">Apple airpods</span>
        </div>
        <div className="productinfobottom">
            <div className="productinfoitem">
                <span className="productinfokey">id:</span>
                <span className="productinfovalue">123</span>
            </div>

            <div className="productinfoitem">
                <span className="productinfokey">sales:</span>
                <span className="productinfovalue">4123</span>
            </div>
            
            <div className="productinfoitem">
                <span className="productinfokey">active:</span>
                <span className="productinfovalue">yes</span>
            </div>
            
            <div className="productinfoitem">
                <span className="productinfokey">in stock:</span>
                <span className="productinfovalue">no</span>
            </div>

        </div>
    </div>
</div>
<div className="productbottom">
<form  className="productform">
    <div className="productformleft">
<label >Product name</label>
<input type="text" placeholder='Apple ' name="" id="" />
<label> In stock</label>
<select name="instock" id="idstock">
    <option value="yes">yes</option>
    <option value="no">No</option>
</select>
<label> Active</label>
<select name="active" id="active">
    <option value="yes">yes</option>
    <option value="no">No</option>
</select>
    </div>
    <div className="productformright">
<div className="productupload">
    <img src="/images/rio3.jpeg" alt="" className="productuploadimg" />
<label htmlFor="file">
    <Publish />

</label>
<input type="file" name="" id="file" style={{display:'none'}} />

</div>

<button onClick={(e)=>{
    e.preventDefault();
}} className="productbutton">Update</button>
    </div>
</form>

</div>

    </div>
  )
}

export default Product
