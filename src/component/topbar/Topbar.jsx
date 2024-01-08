import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import amari from '../../assets/Amari.png';

const Topbar = () => {
    return (  
        <div className="w-full h-[50px] bg-white sticky top-0 z-[999]">
            <div className="h-full py-0 px-[20px] flex items-center justify-between">
                <div className='topLeft'>
                    <span className="font-bold text-[30px] text-blue-800 cursor-pointer">Aungadmin</span>
                </div>
                <div className='flex items-center'>
                    <div className='relative cursor-pointer mr-[10px]'>
                      <NotificationsNone/>
                      <span className='w-[15px] h-[15px] absolute top-[-5px] right-0 bg-red-600 text-white rounded-[50%] flex items-center justify-center text-[10px]'>2</span> {/**Noti alert */}
                    </div>

                    <div className='relative cursor-pointer mr-[10px]'>
                      <Language/>
                      <span className='w-[15px] h-[15px] absolute top-[-5px] right-0 bg-red-600 text-white rounded-[50%] flex items-center justify-center text-[10px]'>2</span> {/**Noti alert */}
                    </div>

                    <div className='relative cursor-pointer mr-[10px]'>
                      <Settings/>
                    </div>
                    {/**Avatar */}
                    <img src={amari} alt='' className='w-[40px] h-[40px] rounded-[50px] cursor-pointer'/> 
                </div>
            </div>
        </div>
    );
}
 
export default Topbar;