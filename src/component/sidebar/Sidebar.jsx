import {LineStyle,Timeline,TrendingUp} from '@mui/icons-material'

const Sidebar = () => {
    return ( 
        <div className="flex-[1] h-screen">
          <div className='p-[20px] text-[#555]'>
          <div className='mb-[10px] '>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='p-[5px]'>
                    <li className='sidebarList'>
                      <LineStyle/>
                      Home
                     </li>

                    <li className='sidebarList'>
                      <Timeline/>
                      Analytics
                    </li>

                    <li className='sidebarList'>
                      <TrendingUp/>
                      Sale
                    </li>
                </ul>
            </div>

            <div className='mb-[10px] '>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='p-[5px]'>
                    <li className='sidebarList'>
                      <LineStyle/>
                      Home
                     </li>

                    <li className='sidebarList'>
                      <Timeline/>
                      Analytics
                    </li>

                    <li className='sidebarList'>
                      <TrendingUp/>
                      Sale
                    </li>
                </ul>
            </div>

          </div>
        </div>
     );
}
 
export default Sidebar;