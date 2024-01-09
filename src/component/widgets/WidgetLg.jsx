import amari from '../../assets/Amari.png';

const WidgetLg = () => {

    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return ( 
        <div className="flex-[2] shadow-custom p-[20px] rounded-xl">
            <h3 className="text-[22px] font-semibold">
                Latest transactions
            </h3>
            <table className="w-full mt-[10px]">
               <tr className="widgetLgTr">
                  <th className='widgetLgTh'>Customer</th>
                  <th className='widgetLgTh'>Date</th>
                  <th className='widgetLgTh'>Amount</th>
                  <th className='widgetLgTh'>Status</th>
               </tr>
               <tr className='widgetLgTr'>
                 <td className='widgetLgUser'> 
                    <img 
                    src={amari} 
                    alt='' 
                    className="widgetLgImg"/>
                    <span className='widgetLgName'>Susan Carol</span>
                 </td>
                 <td className='widgetLgDate'>2 Jun 2021</td>
                 <td className='widgetLgAmount'>$122.00</td>
                 <td className='widgetLgStatus'>
                    <Button type='Approved'/>
                 </td>
               </tr>

               <tr className='widgetLgTr'>
                 <td className='widgetLgUser'> 
                    <img 
                    src={amari} 
                    alt='' 
                    className="widgetLgImg"/>
                    <span className='widgetLgName'>Susan Carol</span>
                 </td>
                 <td className='widgetLgDate'>2 Jun 2021</td>
                 <td className='widgetLgAmount'>$122.00</td>
                 <td className='widgetLgStatus'>
                    <Button type='Declined'/>
                 </td>
               </tr>

               <tr className='widgetLgTr'>
                 <td className='widgetLgUser'> 
                    <img 
                    src={amari} 
                    alt='' 
                    className="widgetLgImg"/>
                    <span className='widgetLgName'>Susan Carol</span>
                 </td>
                 <td className='widgetLgDate'>2 Jun 2021</td>
                 <td className='widgetLgAmount'>$122.00</td>
                 <td className='widgetLgStatus'>
                    <Button type='Pending'/>
                 </td>
               </tr>

               <tr className='widgetLgTr'>
                 <td className='widgetLgUser'> 
                    <img 
                    src={amari} 
                    alt='' 
                    className="widgetLgImg"/>
                    <span className='widgetLgName'>Susan Carol</span>
                 </td>
                 <td className='widgetLgDate'>2 Jun 2021</td>
                 <td className='widgetLgAmount'>$122.00</td>
                 <td className='widgetLgStatus'>
                    <Button type='Approved'/>
                 </td>
               </tr>
            </table>
        </div>
     );
}
 
export default WidgetLg;