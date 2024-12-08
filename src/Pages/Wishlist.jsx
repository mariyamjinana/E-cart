import React from 'react'
import { faTrash , faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.Wishlist)
  console.log(wishlistArray);
  const dispatch = useDispatch()
  const wishes = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  
  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-fuchsia-700 text-4xl '>Wishlist</h1>
    {wishlistArray?.length>0 ?
      <div className=" px-8 mb-10 md:grid grid-cols-4 my-5">
      {wishlistArray?.map((item)=>(<div className="p-2">
       <div className='border shadow-lg p-5'>
          <img src={item?.image} alt="No image" className='w-full h-48 p-8' />
          <h4 className='text-center text-2xl m-3'>{item?.title.slice(0,18)}</h4>
          <p className='text-justify'>{item?.description.slice(0,90)}</p>
          <p className='text-xl my-3 '>Price: <span className='text-violet-600'>${item?.price}</span></p>
          <div className='m-2 flex justify-between'>
            <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='py-2 px-4 text-white bg-red-600 rounded hover:border border-red-600 hover:text-red-600 hover:bg-white'><FontAwesomeIcon icon={faTrash} /></button>
            <button className=' py-2 px-4 text-white bg-green-600 rounded hover:border border-green-600 hover:text-green-600 hover:bg-white' onClick={()=>wishes(item)}><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
       </div>))
       }
       
      </div>
      :
      <div className='md:grid grid-cols-3'>
      <div></div>
      <div className='mt-14 mb-20'>
        <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" className='w-full h-auto'/>
      </div>
      <div></div>
    </div>}
    </div>
    
    </>
  )
}

export default Wishlist