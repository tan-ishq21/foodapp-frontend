import { createContext, useContext, useReducer } from "react"

const cartStateContext = createContext()
const cartDispatchContext = createContext()
const reducer = (state , action) => {
    switch (action.type) {
        case "ADD":
            return [...state , {id: action.id , name: action.name , quantity: action.quantity , size: action.size, price:action.price, img: action.img}]

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        
        case "UPDATE":
            let arr = [...state];
            arr.find((food , index) => {
                if(food.id === action.id){
                    console.log(food.quantity , parseInt(action.quantity), action.price + food.price)
                    arr[index] = {...food , quantity: parseInt(action.quantity) + food.quantity, price: action.price + food.price}
                }
                return arr
            })
            return arr
        case "DROP":
            let empArray = []
            return empArray
        default:
            console.log("Error in Reducer")
    }
}
export const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer , [])
    return (
        <>
            <cartDispatchContext.Provider value={dispatch}>
                <cartStateContext.Provider value={state}>
                    {children}
                </cartStateContext.Provider>
            </cartDispatchContext.Provider>
        </>
    )
}

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);