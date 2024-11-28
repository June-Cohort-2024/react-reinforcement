import { useEffect, useState } from "react"

export const Product = () => {

  const [product, setProduct] = useState(0)


  let arr = [
    {
      name: "Iphone 16",
      price: 2000
    },
    {
      name: "Smart Tv",
      price: 500
    }
  ]

  const [bool, setBool] = useState(true)

  useEffect(() => {
    let position = bool ? 0 : 1
    setProduct(position)
  }, [bool])

  const onClickHandler = (val) => {
    setBool(val)
  }

  return (
    <>
      <div>
        Name : {arr[product].name}  Price: {arr[product].price}
      </div>

      <button className="btn btn-success" onClick={() => onClickHandler(true)} > + </button>
      <button className="btn btn-danger" onClick={() => onClickHandler(false)}> - </button>
    </>
  )
}
