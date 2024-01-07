import {NotificationsNone} from '@mui/icons-material';
const Topbar = () => {
    return (  
        <div className="w-full h-[50px] bg-white">
            <div className="h-full py-0 px-[20px] flex items-center justify-between">
                <div className='topLeft'>
                    <span className="font-bold text-[30px] text-blue-800 cursor-pointer">Aungadmin</span>
                </div>
                <div className='topRight'>
                    <div className=''>
                      <NotificationsNone/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Topbar;