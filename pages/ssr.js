//import React from "react"
//import react jika inggin menggunakan react.fragment sebagai div
export default function SSR(props){
    //console.log({props})
    let {data} = props
    return(
        <div>
            <h1>Server Side Rendering</h1>
            <p>Simulasi Server Side Rendering di nextjs</p>

            <div className={'w-full space-y-6'}>
                {
                    data.map((item)=> {
                        return (
                            <div>
                                <p>User ID: {item.userId}</p>
                                <p>ID: {item.id}</p>
                                <p>Title: {item.title}</p>
                                <p>Body: {item.body}</p>
                            </div>
                        )}
                    )}
            </div>

        </div>
    )
}

export async function getServerSideProps(){
    let data = []
    
    await fetch( 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => {
            data = response
        })
        .catch((err) => {
            data = []
        })

    return{
        props: {
            data
        }
    }
}