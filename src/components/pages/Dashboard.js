
import{useNavigate} from "react-router-dom"


const Dashboard = () => {
    const navigate = useNavigate()
    let data = {
        'name':'soname'
    }
    return (
        <div>
            this dashboard
            <button onClick={()=>{
                navigate("/logout",{state:data})
            }}>logout</button>
        </div>
    )
}

export default Dashboard