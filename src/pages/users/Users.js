import Loading from "../../components/Loading"
import Custom1 from "../../hook/Custom"


function Users(){
     const [islogin ,user ] = Custom1('https://jsonplaceholder.typicode.com/users')
    return(
        <div>
            { islogin ? (
                <Loading />
            ) : (
                user && user.map((item)=>(
                    <div key={item.name}>
                        <p><b>{item.id}</b> - {item.name}</p>
                    </div>
                ))
            )
                
            }
        </div>
    )
}
export default Users