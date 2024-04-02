import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import {loadStripe} from "@stripe/stripe-js" 
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    const stripe = await loadStripe("pk_test_51P162zSD2ABbztaQama9s7TNQ6n4Cz3jND0mQHoektMoEMcL53hktIJct0VJPBClxstnJDS04mFzIf4aFgYQxgZQ00KF2kd4Rz")
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });


    let checkoutResponse = await fetch("http://localhost:5000/api/checkout", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    const session = await checkoutResponse.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    if(result.error){
      console.log("stripe Payment error", result.error);
    }

    console.log("JSON RESPONSE:::::", checkoutResponse.status)
    if (checkoutResponse.status === 200) {
      dispatch({ type: "DROP" })
      alert("Redirect to Payment Gateway.....")
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {/* {console.log(data)} */}
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' >
        <table className='table table-info'>
          <thead className='fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><FaTrash onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price:  {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-info mt-5' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}