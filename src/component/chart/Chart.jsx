import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {

    return ( 
        <div className="m-[20px] p-[20px] shadow-custom rounded-xl">
            <h3 className="mb-[20px] font-bold text-[20px]">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <YAxis/>
                <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
              <Tooltip/>
              {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
              </LineChart>
            </ResponsiveContainer>
        </div>
      );
}
 
export default Chart; 
