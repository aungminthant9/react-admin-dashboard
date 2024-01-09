import amari from '../../assets/Amari.png';
import {Visibility} from '@mui/icons-material'

const WidgetSm = () => {
    return ( 
        <div className="flex-[1] shadow-custom p-[20px] mr-[20px] rounded-xl">
            <span className='text-[22px] font-semibold'>
                New Join Members
            </span>
            <ul className='m-0 p-0 list-none'>
                <li className='widgetSmListItem'>
                    <img src={amari} alt='' className='widgetImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>

                <li className='widgetSmListItem'>
                    <img src={amari} alt='' className='widgetImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>

                <li className='widgetSmListItem'>
                    <img src={amari} alt='' className='widgetImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>

                <li className='widgetSmListItem'>
                    <img src={amari} alt='' className='widgetImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>

                <li className='widgetSmListItem'>
                    <img src={amari} alt='' className='widgetImg'/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
     );
}
 
export default WidgetSm;