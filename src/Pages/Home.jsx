import { faHeart , faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import userFetch from '../hooks/useFetch'
import { addWishlistItems } from '../redux/slices/wishlistSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'


function Home() {
  const data = userFetch('https://fakestoreapi.com/products')
  // console.log(data);
  const dispatch = useDispatch()
  
  return (
    <>
      <div className="pt-32 px-8 mb-10 md:grid grid-cols-4">
       { data?.length>0 && 
       data?.map((item)=>(<div className="p-2">
        <div className='border shadow-lg p-5'>
           <img src={item.image} alt="No image" className='w-full h-48 p-8' />
           <h4 className='text-center text-xl m-3'>{item.title.slice(0,20)}</h4>
           <p className='text-justify'>{item.description.slice(0,90)}</p>
           <p className='text-xl my-3 '>Price: <span className='text-violet-600'>${item.price}</span></p>
           <div className='m-2 flex justify-between'>
             <button className='py-2 px-4 text-white bg-red-600 rounded hover:border border-red-600 hover:text-red-600 hover:bg-white' onClick={()=>dispatch(addWishlistItems(item))} ><FontAwesomeIcon icon={faHeart} /></button>
             <button className=' py-2 px-4 text-white bg-green-600 rounded hover:border border-green-600 hover:text-green-600 hover:bg-white' onClick={()=>dispatch(addToCart(item))}><FontAwesomeIcon icon={faCartShopping} /></button>
           </div>
         </div>
        </div>))
       }
       
      </div>
    </>
  )
}

export default Home