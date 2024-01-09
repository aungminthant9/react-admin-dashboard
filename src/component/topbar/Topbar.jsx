import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import amari from '../../assets/Amari.png';

const Topbar = () => {
    return (  
        <div className="w-full h-[50px] sticky top-0 z-[999] bg-gray-100 rounded-xl shadow-md">
            <div className="h-full py-0 px-[20px] flex items-center justify-between">
                <div className='topLeft'>
                    <span className="font-bold text-[30px] text-blue-800 cursor-pointer">AungAdmin</span>
                </div>
                <div className='flex items-center'>
                    <div className='navIcon'>
                      <NotificationsNone/>
                      <span className='noti'>2</span> {/**Noti alert */}
                    </div>

                    <div className='navIcon'>
                      <Language/>
                      <span className='noti'>2</span> {/**Noti alert */}
                    </div>

                    <div className='navIcon'>
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