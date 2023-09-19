import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div className="homeContent">
            <div className="homeElements">
                <h1>Random generate your next meal here!</h1>
                <Link to={'/meal'}><button>GENERATE</button></Link>
            </div>
            
        </div>

    );
}
 
export default Home;