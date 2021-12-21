import './ServiceList.css';

const ServiceList = (props) => {

    return (
        <div>
            {
                props.data.map((item, i) => {
                    return (
                        <div key={i}>
                            <h1>{item.title}</h1>
                            <h3>{item.ammount}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default ServiceList