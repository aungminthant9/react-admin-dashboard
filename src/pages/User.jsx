import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import amari from '../assets/Amari.png';
import { Link } from 'react-router-dom';
const User = () => {
    return ( 
        <div className="flex-[4] p-[20px]">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl text-[teal]">Edit User</h1>
                <Link to='/newUser'>
                   <button className="w-[90px] p-[5px] bg-orange-700 rounded-[5px] cursor-pointer text-white text-[16px]">Create</button>
                </Link>
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
                    <div className="mt-[20px]">
                         <span className='text-[14px] font-semibold text-gray-400'>Account Details</span>
                         <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon'/>
                            <span className='userShowInfoTitle'>annabresr69</span>
                         </div>

                         <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon'/>
                            <span className='userShowInfoTitle'>4.12.2000</span>
                         </div>
                         
                         <span className='text-[14px] font-semibold text-gray-400'>Contact Details</span>
                         <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon'/>
                            <span className='userShowInfoTitle'>+959 221 343 43</span>
                         </div>

                         <div className='userShowInfo'>
                            <MailOutline className='userShowIcon'/>
                            <span className='userShowInfoTitle'>annabresr69@gmail.com</span>
                         </div>

                         <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon'/>
                            <span className='userShowInfoTitle'>New York | USA</span>
                         </div>
                    </div>
                </div>
                <div className="flex-[2] p-[20px] shadow-custom ml-[20px] rounded-xl">
                    <span className='text-[24px] font-semibold'>Edit</span>
                    <form className='flex justify-between mt-[20px]'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>User Name</label>
                                <input type='text' placeholder='annabresr69' className='userUpdateInput'/>
                            </div>

                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Anna Bresr' className='userUpdateInput'/>
                            </div>

                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type='email' placeholder='annabresr69@gmail.com' className='userUpdateInput'/>
                            </div>

                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type='text' placeholder='+959 221 343 43' className='userUpdateInput'/>
                            </div>

                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type='text' placeholder='New York | USA' className='userUpdateInput'/>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className='flex items-center'>
                                <img src={amari} alt=''
                                     className='w-[100px] h-[100px] rounded-[10px] object-cover mr-[20px]'/>
                                <label htmlFor='file'><Publish className='cursor-pointer'/></label>
                                <input type='file' id="file" className='hidden'/>
                            </div>
                            <button className='w-[150px] p-[5px] bg-violet-600 rounded-[5px] cursor-pointer text-white text-[14px]'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default User;