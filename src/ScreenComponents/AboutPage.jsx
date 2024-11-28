import { Parragraph } from "../Components/Parragraph"
import { Product } from "../Components/Product"

export const AboutPage = ()=>{
    let data2 ="This a second parragraph"


    return (
        <>
            <h1>About</h1>
            <Parragraph text={data2} />

            <Product />
        </>
    )
}