import {LineStyle,Timeline,TrendingUp,PermIdentity,Storefront,AttachMoney,
        BarChart,MailOutline,DynamicFeed,ChatBubbleOutline,WorkOutline,Report} from '@mui/icons-material'

const Sidebar = () => {
    return ( 
        <div className="flex-1 h-[calc(100vh-50px)] sticky top-[50px]">
          <div className='p-[20px] text-[#555]'>
          <div className='mb-[10px] '>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='p-[5px]'>
                    <li className='sidebarList'>
                      <LineStyle className='sidebarIcon'/>
                      Home
                     </li>

                    <li className='sidebarList'>
                      <Timeline className='sidebarIcon'/>
                      Analytics
                    </li>

                    <li className='sidebarList'>
                      <TrendingUp className='sidebarIcon'/>
                      Sales
                    </li>
                </ul>
            </div>

            <div className='mb-[10px] '>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='p-[5px]'>
                    <li className='sidebarList'>
                      <PermIdentity className='sidebarIcon'/>
                      Users
                     </li>

                    <li className='sidebarList'>
                      <Storefront className='sidebarIcon'/>
                      Products
                    </li>

                    <li className='sidebarList'>
                      <AttachMoney className='sidebarIcon'/>
                      Transactions
                    </li>

                    <li className='sidebarList'>
                      <BarChart className='sidebarIcon'/>
                      Reports
                    </li>
                </ul>
            </div>

            <div className='mb-[10px] '>
                <h3 className='sidebarTitle'>Notifications</h3>
                <ul className='p-[5px]'>
                    <li className='sidebarList'>
                      <MailOutline className='sidebarIcon'/>
                      Mail
                     </li>

                    <li className='sidebarList'>
                      <DynamicFeed className='sidebarIcon'/>
                      Feedback
                    </li>

                    <li className='sidebarList'>
                      <ChatBubbleOutline className='sidebarIcon'/>
                      Messages
                    </li>
                </ul>
            </div>

            <div className='mb-[10px] '>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='p-[5px]'>
                    <li className='sidebarList'>
                      <WorkOutline className='sidebarIcon'/>
                      Manage
                     </li>

                    <li className='sidebarList'>
                      <Timeline className='sidebarIcon'/>
                      Analytics
                    </li>

                    <li className='sidebarList'>
                      <Report className='sidebarIcon'/>
                      Reports
                    </li>
                </ul>
            </div>

          </div>
        </div>
     );
}
 
export default Sidebar;