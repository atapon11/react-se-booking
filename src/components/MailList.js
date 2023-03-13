import React from 'react'

const MailList = () => {
  return (
   <div className='newsletter'>
     <div className='emailform'>
     <form action="#">
     <input type="email" name="email" id="email" placeholder="Your Email" class="form-control" />
     <button className="btn" type="submit">Submit</button>
     </form>
     </div>

   </div>

    
   
  )
}

export default MailList