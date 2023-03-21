import axios from "axios"

export default function ProductSsr({data}){
    return (
        <div className="w-full">
            {
                Array.isArray(data) && data.length > 0 ? data.map((item)=>{
                    return (<li>{item.id}</li>)
                })
                : 'Empty'
            }
        </div>
    )
}

export async function getServerSideProps(context){
    const[err,data] = await axios
        .get('http://localhost:3001/api/product')
        .then((response)=>{
            return[null, response.data]
        })
        .catch((err)=>{
            return[err,null]
        })
    
    if(err){
        return {
            redirect: {
                destination: '/about',
                permanent: false
            }
        }
    }

        // .get(url: 'http://localhost:3001/api/product', config: {
        //     query: {
        //         page:1,
        //         limit:10
        //     }
        // })
    return{
        props: {
            data
        }
    }
}