// export default function ProductList() {
//     return(
//         <div>
//             <h1>Product List</h1>
//         </div>
//     )
// }

import { useEffect, useState } from "react";

export default function ProductList() {
    const [visible, setVisible] = useState( false)
    const [data , setData] = useState(  [])
    const [loading, setLoading] = useState(  false)

    useEffect(  () => {
        setLoading( true)
            fetch('http://localhost:3001/api/product')
            .then((res)=> res.json())
            .then((result)=> {
                setData(result)
                setLoading( false)
            }) 
            .catch((err)=> {
                setLoading( false)
            })
        
        // if(visible){
            
        // }
    }, [])
    
    console.log(loading, 'LOADING')
    let timeout

    return(
        <div>
            <h1>Product List</h1>
            {/* <button 
                className={'bg-red-500 text-white'}
                onClick={()=> setVisible(!visible)}>
                visible
            </button> */

            // Array.isArray(data) &&
            // data.length > 0 &&
            loading ? 'Loading...' 
                :
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
    )
}