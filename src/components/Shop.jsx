import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { bindActionCreators } from 'redux'


function Shop() {
    const dispatch = useDispatch()
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
    return (
        <>
        <div className="container mx-auto my-3">
            <h2 className='my-3'>Buy ROG @1299 only</h2>
                {/* <button className="btn-primary mx-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(200))}}>-</button>
                <span>Add to Cart</span>
                <button className="btn-primary mx-3" onClick={()=>{dispatch(actionCreators.depositMoney(200))}}>+</button> */}
                <button className="btn-primary mx-3" onClick={()=>{withdrawMoney(200)}}>-</button>
                <span>Add to Cart</span>
                <button className="btn-primary mx-3" onClick={()=>{depositMoney(200)}}>+</button>
        </div>
        </>
    )
}

export default Shop
