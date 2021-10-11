import React from 'react';
import About from '../About/About';
import Introduction from '../Introduction/Introduction';

const Body = () => {
    return (
        
        
  <section class="relative pt-12 bg-blueGray-50 container mx-auto px-6">
<div class="flex flex-wrap">
  <div class="w-full md:w-5/12 ml-auto mr-auto px-4 ">
    <Introduction/>
  </div>
  <div class="w-full md:w-6/12 ml-auto mr-auto px-4 ">
       
      <About/>
      <About/>
      <About/>
  </div>
</div>
 
</section>  
 

    );
};

export default Body;