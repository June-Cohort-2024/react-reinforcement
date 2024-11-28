import { Parragraph } from "../Components/Parragraph"
import { Citizen } from "../Components/Citizen"
import { UnderAge } from "../Components/UnderAge"
import { Input } from "../Components/Input"
import { useState } from "react"

export const HomePage = () => {

    let data = "My info for the parragraph"

    const [ age, setAge ] = useState(0)

    const onChangeHandler = (event)=>{

        setAge( parseInt(event.target.value) )
         
        console.log(age)

    }

    return (
        <>
            <h1>Home</h1>
            <Parragraph text={data} />

            <div className="m-5">
                <label className="form-label">Enter Age</label>
                <input  onChange={onChangeHandler} type="number" className="form-control"  />
            </div>

            { age >= 21 ? <Citizen /> : <UnderAge />}
        </>
    )

}