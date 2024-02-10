import { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";
import "./cards.css"

const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = useCart()
    const priceRef = useRef()
    let options = props.options
    let priceOptions = Object.keys(options)
    const [quantity , setQuantity] = useState(1)
    const [size , setSize] = useState("")
    const handleAddToCart = async () => {
        let food = []
        for(const item of data){
            if(item.id === props.foodItem._id){
                food = item;
                break;
            }
        }
        if(food.length !== 0){
            if(food.size === size){
                await dispatch({type: "UPDATE" , id: props.foodItem._id , price: finalPrice , quantity: quantity})
                return
            }
            else if(food.size !== size){
                await dispatch({type: "ADD" , id: props.foodItem._id , name: props.foodItem.name , price: finalPrice , quantity:quantity , size: size})
                return
            }
            return
        }
        await dispatch({type: "ADD" , id: props.foodItem._id , name: props.foodItem.name , price: finalPrice , quantity:quantity , size: size})
        // console.log(data)
    }
    let finalPrice = quantity * parseInt(options[size])
    useEffect(() => {
        setSize(priceRef.current.value)
    },[])
    return (
        <>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px"}}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px" , objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container w-100">
                        {/* <div className="row"> */}
                            {/* <div className="col-12 col-md-6"> */}
                                <select className="m-2 h-100 bg-success" onChange={(e) => setQuantity(e.target.value)}>
                                    {
                                        Array.from(Array(6), (e, i) => {
                                            return (
                                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                                            )
                                        })
                                    }
                                </select>
                            {/* </div> */}
                            {/* <div className="col-12 col-md-6"> */}
                                <select className="m-2 h-100 bg-success" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                    {
                                        priceOptions.map((data) => {
                                            return <option key={data} value={data} >{data}</option>
                                        })
                                    }
                                </select>
                            {/* </div> */}
                        {/* </div> */}
                        
                        
                        <div className="d-inline h-100">
                        ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Card;