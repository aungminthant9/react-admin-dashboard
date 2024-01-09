import Chart from "../component/chart/Chart";
import FeaturedInfo from "../component/featuredInfo/FeaturedInfo";
import {userData} from '../dummyData';
import WidgetSm from "../component/widgets/WidgetSm";
import WidgetLg from "../component/widgets/WidgetLg";

const Home = () => {
    return (  
        <div className="flex-[4]">
            <FeaturedInfo/>
            <Chart data={userData} title='User Analytics' dataKey="Active User" grid/>
            <div className="flex m-[20px]">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}
 
export default Home;