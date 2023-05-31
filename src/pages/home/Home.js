import { Link } from "react-router-dom"
import './Home.css'

function Home(){

    return(
        <div className="Link1">

         <Link className="link" to="/posts">posts</Link>
         <Link className="link" to="/todos">todos</Link>
         <Link className="link" to="/users">users</Link>

        </div>
        
       
    )
}
export default Home