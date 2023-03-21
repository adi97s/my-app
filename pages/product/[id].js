export default function ProductDetail({ id }) {
    return (  
        <h1>Product Detail {id}</h1>
    )
}

export async function getServerSideProps(context) {
    let { id } = context.params

    return {
        props: {
            id
        }
    }
}