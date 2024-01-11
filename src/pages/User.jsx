import { PermIdentity } from '@mui/icons-material';
import amari from '../assets/Amari.png';
const User = () => {
    return ( 
        <div className="flex-[4] p-[20px]">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl text-[teal]">Edit User</h1>
                <button className="w-[80px] p-[5px] bg-orange-700 rounded-[5px] cursor-pointer text-white text-[16px]">Create</button>
            </div>
            <div className="flex mt-[20px]">
                <div className="flex-1 p-[20px] shadow-custom rounded-xl">
                    <div className="flex items-center">
                        <img src={amari} alt="" className="w-[40px] h-[40px] rounded-full object-cover mr-[15px]"/>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>Anna Bresr</span>
                            <span className='font-light'>Software Engineer</span>
                        </div>
                    </div>
                    <div className="">
                         <span>Account Details</span>
                         <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon'/>
                            <span className='userShowInfoTitle'>annabresr</span>
                         </div>
                    </div>
                </div>
                <div className="flex-2 p-[20px] shadow-custom ml-[20px] rounded-xl"></div>
            </div>
        </div>
     );
}
 
export default User;