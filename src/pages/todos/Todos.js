import Loading from "../../components/Loading"
import Custom1 from "../../hook/Custom"


function Todos(){
     const [islogin , todo] = Custom1('https://jsonplaceholder.typicode.com/todos')
    return(
        <>
         { islogin ? (
            <Loading />
         ) : (
            todo && todo.map((item)=>(
                <div key={item.id}>
                    <p><b>{item.id}</b> - {item.title}</p>

                </div>
            ))
         )
           
         }
        </>
    )
}
export default Todos