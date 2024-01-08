import Chart from "../chart/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";

const Home = () => {
    return (  
        <div className="flex-[4]">
            <FeaturedInfo/>
            <Chart/>
        </div>
    );
}
 
export default Home;