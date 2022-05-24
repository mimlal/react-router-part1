import {useLocation} from 'react-router-dom'

const Login = () => {
    let location = useLocation();
    console.log(location)
    return (
        <div>
            this login
            <h2>{location.state.st}</h2>
        </div>
    )
}

export default Login