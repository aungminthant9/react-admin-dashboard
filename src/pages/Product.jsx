import { Link } from "react-router-dom";
import Chart from "../component/chart/Chart";
import { productData } from "../dummyData";
import airpod from '../assets/airpods.jpg';
import { Publish } from "@mui/icons-material";
import { ResponsiveContainer } from "recharts";

const Product = () => {
    return ( 
        <div className="flex-[4] p-[20px]">
            <div className="flex items-center justify-between">
                <h1 className="">Product</h1>
                <Link to='/newproduct'>
                  <button className="w-[80px] p-[5px] bg-orange-600
                   text-white rounded-[5px] text-[16px] cursor-pointer">
                    Create
                   </button>
                </Link>
            </div>
            <div className="flex">
                <div className="flex-[2.5]">
                    <ResponsiveContainer>
                      <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1 shadow-custom p-[20px] m-[20px] rounded-xl">
                    <div className="flex items-center justify-center">
                        <img src={airpod} alt="" className="w-[50px] h-[50px] rounded-full object-cover mr-[20px]"/>
                        <span className="font-semibold">Apple Airpod</span>
                    </div>
                    <div className="mt-[20px] flex flex-col items-center justify-center">
                        <div className="productInfoItem">
                           <span className="productInfoKey">Id:</span>
                           <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                           <span className="productInfoKey">Sales:</span>
                           <span className="productInfoValue">$123</span>
                        </div>

                        <div className="productInfoItem">
                           <span className="productInfoKey">Active:</span>
                           <span className="productInfoValue">yes</span>
                        </div>

                        <div className="productInfoItem">
                           <span className="productInfoKey">In Stock:</span>
                           <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-custom p-[20px] m-[20px]">
                <form className="flex justify-between">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple airpod"/>
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>

                        <label>Active</label>
                        <select name="active" id="active">
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>

                    </div>
                    <div className="flex flex-col items-center justify-around">
                        <div className="flex items-center">
                            <img src={airpod} alt="" className="w-[100px] h-[100px] rounded-[10px] object-cover mr-[20px]"/>
                            <label htmlFor="file"><Publish/></label>
                            <input type="file" id="file" hidden/>
                        </div>
                        <button className='w-[150px] p-[5px] bg-violet-600 rounded-[5px] cursor-pointer text-white text-[14px]'>Update</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Product;