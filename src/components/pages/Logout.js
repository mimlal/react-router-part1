
import {useLocation} from "react-router-dom"


const Logout = () => {
    const location =useLocation()
    return (
        <div>
            this is logout
            <h2>{location.state.name}Logout Out !</h2>
        </div>
    )
}

export default Logout