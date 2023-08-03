import React from 'react';
import './Page.css';


export default function Page() {
  return (
    <>
      <div id='page-00' className="w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0  overflow-hidden">
          <img className="w-full h-full py-20 object-cover" src='../img1.jpg' alt="Background Image" />
        </div>

        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl font-bold tracking-widest md:text-5xl lg:text-6xl">PORTFOLIO</h1>
        </div>
      </div>


      <div id='page-01' className="flex flex-col items-center bg-white w-full h-screen">
          <img className="mt-8  object-cover w-full h-3/5 md:mt-0 md:mb-5" src='../img2.jpg' alt="" />
          
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className='md:block text-right'>
              <h1 className='mb-1 font-extrabold text-sage-col text-4xl tracking-widest md:text-6xl md:ml-28'>01</h1>
              <h5 className="text-2xl font-bold text-dark-gr tracking-wide md:text-4xl md:ml-28 md:mb-5 whitespace-nowrap">Title Here</h5>
            </div>

            <div className='flex flex-col text-right'>
              <p className="mb-2 mx-2 text-xl font-semibold text-sage-col md:mr-54 md:ml-28">A few words about title</p>
              <p className="font-normal mx-2 text-dark-gr md:ml-28">Olive’s dark hue means it is sometimes mistaken for a pale brown. However, while olive sits between green and yellow on the color wheel, it’s generally thought to be a shade of green. Olive is also considered a shade of green on the hex chart used by web designers and developers.</p>
            </div>
          </div>
      </div>

      <div id='page-02' className='flex flex-col md:flex-row bg-white w-screen h-screen'>
        <img className="justify-start mb-3 object-cover h-max md:max-w-xl lg:max-w-3xl md:mt-0 md:mb-10 lg:mr-5" src='../img3.jpg' alt="" /> 
        <div className="flex flex-col text-right p-4 leading-normal">
            <h1 className='mb-1 mx-2 font-extrabold text-sage-col text-4xl tracking-widest md:text-6xl md:mt-28'>02</h1>
            <h5 className="mb-2 mx-2 text-2xl font-bold text-dark-gr tracking-wide md:text-5xl md:mb-24">Title Here</h5>
            <p className="mb-2 mx-2 text-xl font-semibold text-sage-col">A few words about title</p>
            <p className="font-normal mx-2 text-dark-gr lg:max-w-m">The serene sage color background exudes a sense of tranquility and sophistication, providing a soothing backdrop for any space. Against this muted canvas, a sleek black lamp commands attention with its striking contrast, adding a touch of modern elegance and a focal point to the room's ambiance.</p>
        </div>
      </div>

      <div id='page-03' className='flex flex-col md:flex-row bg-white w-screen h-screen md:justify-between'>
        <img className="justify-start mb-3 object-cover h-max md:max-w-xl lg:max-w-2xl md:mt-0 md:mb-10 lg:mr-5" src='../img4.jpg' alt="" /> 
        <div className="flex flex-col text-right p-4 leading-normal md:max-w-[20rem] md:mr-5 lg:mr-16">
            <h1 className='mb-1 mx-2 font-extrabold text-sage-col text-4xl tracking-widest md:text-6xl md:mt-28'>03</h1>
            <h5 className="mb-2 mx-2 text-2xl font-bold text-dark-gr tracking-wide md:text-5xl md:mb-24">Title Here</h5>
            <p className="mb-2 mx-2 text-xl font-semibold text-sage-col">A few words about title</p>
            <p className="font-normal mx-2 text-dark-gr lg:max-w-m">Sipping on a warm cup of coffee surrounded by lush green plants creates a harmonious and rejuvenating oasis, where nature's beauty and the aroma of freshly brewed coffee intertwine.</p>
        </div>
      </div> 

    </>
  )
}
