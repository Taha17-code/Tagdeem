import React, { useState } from 'react'

const AddNewTemplate = () => {

   const [fromData , setFormData]= useState({
    title : "",
    imageURL : null ,
    
   })

   // handilng input change
   const handleInputChange = (e) => {

      const { name, value } = e.target;
      setFormData((prevData) =>({   ...prevData, [name]: value })) ;
   }
   
  return (
    <div className='w-full  min-h-screen px-4  py-4 lg:px-10 2xl:px-32  grid grid-cols-1 lg:grid-cols-12 gap-6  '>  

    {/*   left Container  */}
 
    <section className='cols-span-12  lg:col-span-4  2xl:col-span-3 w-full  flex flex-1 items-center justify-start flex-col gap-4   p-3 '> 
    
      {/*   Sidebar  */}
      <div className='w-full   '>  <h3> أنشئ قالب جديد </h3> </div>

      {/*   template ID section   */}
      <div className='w-full flex items-center justify-start'> <p className='text-base text-gray-400 uppercase font-semibold'> TempID: {" "} </p></div> 

      {/*   Template Title section   */}
      <input  className='w-full  p-1 flex items-center justify-start shadow-md rounded-sm bg-transparent border border-gray-200 focus:shadow-xl outline-none'
       type='text' name='title' placeholder='عنوان القالب ' value={fromData.title} onChange={handleInputChange} />

      {/*   Template Image section   - file uploader section  */}
      <div className='w-full  bg-gray-100 backdrop-blur-md  lg:h-[620px] 2xl:h-[470px] rounded-md border border-2 dorder-dotted
                       border-gray-100 cursor-pointer flex items-center justify-center '></div>
    </section>



    {/*   Right Container  */}
    <section className='cols-span-12  lg:col-span-8  2xl:col-span-9 w-full flex flex-1 items-center justify-start flex-col gap-4 p-3 bg-red-200'  > 2</section>

   
    
        {/* <h1 className='font-bold my-5'>إضافة قالب جديد</h1> */} 
    </div>
  )
}

export default AddNewTemplate
