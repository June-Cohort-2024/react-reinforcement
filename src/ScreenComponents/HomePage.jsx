import { Parragraph } from "../Components/Parragraph"
import { Citizen } from "../Components/Citizen"
import { UnderAge } from "../Components/UnderAge"

export const HomePage = () => {

    let data = "My info for the parragraph"

    let age = 30

    return (
        <>
            <h1>Home</h1>
            <Parragraph text={data} />

            { age >= 21 ? <Citizen /> : <UnderAge />}
        </>
    )

}