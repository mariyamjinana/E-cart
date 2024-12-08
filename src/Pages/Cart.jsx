import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteFromCart, emptyCart } from '../redux/slices/cartSlice'


function Cart() {
  const [total,setTotal] = useState()
  const cartArray = useSelector((state) => state.cart)
  console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotal = ()=>
  {
    if(cartArray?.length>0)
    {
      setTotal(cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))
      console.log(total); 
    }
  }

const handleCheckout = ()=>{
  alert('order placed successfully')
  dispatch(emptyCart())
  navigate('/')
}

 useEffect(()=>{
  getTotal()
},[cartArray])

  return (
   
    <>
      <div className='pt-32'>
        <h1 className='text-center text-fuchsia-700 text-4xl '>Cart</h1>
        {cartArray.length > 0 ?
          <div className='md:grid grid-cols-[2fr_1fr] '>
            <div className='p-10'>
              <table className='border border-gray-200 w-full shadow text-center'>
                <thead>
                  <tr>
                    <th className='bg-gray-600 p-4 border border-gray-200 text-white '>#</th>
                    <th className='bg-gray-600 p-4 border border-gray-200 text-white '>Title</th>
                    <th className='bg-gray-600 p-4 border border-gray-200 text-white '>Image</th>
                    <th className='bg-gray-600 p-4 border border-gray-200 text-white '>Price</th>
                    <th className='bg-gray-600 p-4 border border-gray-200 text-white '>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item, index) => (
                    <tr>
                      <td className='p-4 border border-gray-200'>{index + 1}</td>
                      <td className='p-4 border border-gray-200'>{item.title}</td>
                      <td className='p-4 border border-gray-200 flex justify-center'><img src={item.image} alt=" NO IMAGE" style={{ height: "100px", width: "150px" }} className='p-5' /></td>
                      <td className='p-4 border border-gray-200'>$ {item.price}</td>
                      <td className='p-4 border border-gray-200'><button onClick={()=>dispatch(deleteFromCart(item?.id))} className='bg-red-600 px-5 py-3 text-white rounded hover:text-red-600 hover:bg-white hover:border border-red-600'><FontAwesomeIcon icon={faTrash} /></button></td>
                    </tr>))
                  }
                </tbody>
              </table>
            </div>
            <div className='p-10'>
              <div className='shadow-lg p-5'>
                <h1 className='text-center text-2xl '>Cart Summary</h1>
                <p className='mt-4 '>Total number of items : {cartArray.length}</p>
                <p className='mt-2'>Grand Total : ${total}</p>
                <button className='p-3 bg-green-600 w-full mt-3 rounded text-white hover:border border-green-600 hover:text-green-600 hover:bg-white' onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </div>
          :
          <div className='md:grid grid-cols-3'>
            <div></div>
            <div className='mt-8 mb-28 text-center'>
              <img src="https://c9nutrition.com/img/empty-cart-yellow.png" alt="" className='w-full h-auto' />
              <Link to={'/'}>
                <button className='p-3 bg-green-600  mt-3 rounded text-white hover:border border-green-600 hover:text-green-600 hover:bg-white'><FontAwesomeIcon icon={faBackward} /> Back Home</button>
              </Link>
            </div>
            <div></div>
          </div>}
      </div>
    </>
  )
}

export default Cart