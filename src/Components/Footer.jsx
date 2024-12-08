import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
    <div className='py-10 px-12 bg-fuchsia-800 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'>
      <div>
        <h2 className='text-3xl'> <FontAwesomeIcon icon={faCartShopping}  className=' me-3' />E-CART</h2>
        <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi porro, quae, blanditiis at quas repellendus nemo explicabo rem sapiente possimus? Ut hic aspernatur magni doloremque quos soluta perspiciatis reiciendis.</p>
      </div>
      <div  className='md:flex justify-center mt-5 md:mt-0'>
        <div>
          <h3 className='text-3xl'>Links</h3>
          <Link to={'/'}><p className='mt-5'> Home</p></Link>
          <Link to={'/wishlist'}><p className='mt-3'> Wishlist</p></Link>
          <Link to = {'/cart'}><p className='mt-3'> Cart</p></Link>
        </div>
      </div>
      <div   className='md:flex justify-center mt-5 md:mt-0'>
      <div>
          <h3 className='text-3xl'>Guides</h3>
          <p className='mt-5'> React</p>
          <p className='mt-3'> React-Bootstrap</p>
          <p className='mt-3'> Bootswatch</p>
        </div>
      </div>
      <div>
        <h3 className='text-3xl mt-5 md:mt-0'>Contact Us</h3>
        <div className='flex mt-6'>
          <input type="text" placeholder='Email id'className='p-3 rounded w-full' />
          <button className='p-3 bg-orange-700 rounded ms-2'>Subscribe</button>
        </div>
        <div className='flex justify-between mt-5'>
        <FontAwesomeIcon icon={faTwitter} className='text-3xl ' />
        <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl ' />
        <FontAwesomeIcon icon={faFacebook} className='text-3xl ' />
        <FontAwesomeIcon icon={faInstagram} className='text-3xl ' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer