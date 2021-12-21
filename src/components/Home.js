import './Home.css';
import ServiceList from './service/ServiceList'; 

const Home= (props) => {
    console.log("in Home component:",props)
    return (
        <div>
            <h1>Home</h1>
            <ServiceList data={props.data} />
        </div>
    )
}
export default Home;