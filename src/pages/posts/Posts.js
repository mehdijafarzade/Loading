import Custom1 from "../../hook/Custom"
import Loading from "../../components/Loading"

function Posts(){
        const [ islogin ,  post ] = Custom1('https://jsonplaceholder.typicode.com/posts')
        
    return(
        <>
        
        {
            islogin ? (
                <Loading />
            ) : (
                post && post.map((item)=>(
                    <div key={item.id}>
                        <p><b>{item.id}</b> - {item.title}</p>
                    </div>
                ))
            )
        }
       
        </>
    )
}
export default Posts