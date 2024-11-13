import React from "react";
import '../App.css';
import MyImage from '../assets/my-image.png';
import Play from '../assets/play.png';
import Call from '../assets/call.png';
import Message from '../assets/conversation.png';
import Calender from '../assets/calendar.png';
import bill from '../assets/bill.png';
import tick from '../assets/check-mark.png';
import customer from '../assets/customer.png';
import event from '../assets/event.png';
import mic from '../assets/mic.png';
import revenue from '../assets/revenue.png';
import analytics from '../assets/analytics.png';
import increase from '../assets/increase.png';
import service from '../assets/service.png';
import ai from '../assets/ai.png';
import shuttle from '../assets/shuttle.png';
import arrowbutton from '../assets/arrowbutton.png';


const icons = [Call, Message, Calender, bill, tick, customer, event];

function Home() {
  return (
   
    <div className="min-h-screen flex-grow font-space-grotesk bg-gradient-to-tr from-purple-900 via-black via-45% to-purple-950 text-white flex flex-col overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-14">


    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 120 120%27%3E%3Crect width=%27120%27 height=%27120%27 fill=%27none%27 stroke=%27%23ffffff40%27 stroke-width=%270.5%27/%3E%3C/svg%3E')",
        opacity: 0.3,
        zIndex: 0, 
      }}
    ></div>
    
      <main className="text-center py-20  px-4">

<div className="bg-transparent mt-16 rounded-full px-5 py-2 inline-flex items-center justify-center text-lg font-space-grotesk text-white"
  style={{
    border: 'transparent',
    borderImage: 'linear-gradient(to right, #8B5CF6, #6B21A8, #FB923C) 1',
    boxShadow: 'inset 0px 4px 10px rgba(139, 92, 246, 0.5), inset 0px 6px 15px rgba(251, 146, 60, 0.5)', // Inner shadow with purple to orange
  }}
>
  <img 
    src="https://th.bing.com/th/id/R.ea3274d50a6a9341fd4692b45d34fce4?rik=z04oyVRDAaHoUQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsparkles-transparent-png%2fsparkles-transparent-png-5.png&ehk=qF8Zpv2kIJQdNASVx3JQTq2yvjpX1s26eBXMy45d0aQ%3d&risl=&pid=ImgRaw&r=0" 
    alt="Sawtify Icon" 
    className="mr-2 w-5 h-5" 
  />
  Best AI Calling Agent
</div>
        <h1 className="text-4xl font-space-grotesk md:text-5xl font-bold py-6 leading-tight">
          AI Calling Agent To Resolve <br />
          <span className="text-pink-500">Calls Consistently</span>
        </h1>
        <p className="mt-2 text-gray-200">
          Lorem ipsum tobelt revant kant. Pretarade tresösm tivande ten. Plangar <br />
          preknonade analiga, mid. Telekropekådade.
        </p>

 <div className="relative z-10 flex flex-col items-center justify-center">
    <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2">
  <div className="flex w-full md:w-auto border border-gray-200 rounded-full overflow-hidden">
    <select className="bg-transparent text-gray-400 px-2 py-2 w-full md:w-auto">
      <option>+1</option>
      <option>+43</option>
      <option>+44</option>
      <option>+92</option>
      <option>+93</option>
    </select>
    <input
      type="text"
      placeholder="Enter your phone number"
      className="bg-transparent text-gray-400 px-4 py-2 w-15 md:w-60"
    />
  </div>
  <div className="relative w-full md:w-auto mt-4 md:mt-0">
    <button className="bg-gradient-to-t from-purple-600 to-pink-500 px-4 py-2 rounded-full text-white w-15 md:w-auto">
      Call Me ➡
    </button>
    <img
      src={arrowbutton}
      alt="arrowbutton"
      className="w-16 h-16 absolute -bottom-12 -right-1 md:-right-12 md:-bottom-16"
    />
  </div>
</div>
  </div>


  <div className="mt-32 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4 px-4 md:px-12">
  {/* Left Side (What is Sawtify? section) */}
  <div className="flex flex-col space-y-6 w-full md:w-[50%]">
    <div className="flex justify-start mt-4">
      <div
        className="bg-transparent rounded-full px-6 py-3 inline-flex items-center justify-center font-space-grotesk text-white"
        style={{
          border: 'transparent',
          borderImage: 'linear-gradient(to right, #8B5CF6, #6B21A8, #FB923C) 1',
          boxShadow: 'inset 0px 4px 10px rgba(139, 92, 246, 0.5), inset 0px 6px 15px rgba(251, 146, 60, 0.5)',
          marginLeft: '1rem',
        }}
      >
        <img
          src="https://th.bing.com/th/id/R.ea3274d50a6a9341fd4692b45d34fce4?rik=z04oyVRDAaHoUQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsparkles-transparent-png%2fsparkles-transparent-png-5.png&ehk=qF8Zpv2kIJQdNASVx3JQTq2yvjpX1s26eBXMy45d0aQ%3d&risl=&pid=ImgRaw&r=0"
          alt="Sawtify Icon"
          className="mr-2 w-5 h-6"
        />
        What is Sawtify?
      </div>
    </div>
    <p className="text-gray-400 text-md font-sans pr-7 text-start">
      Lorem ipsum tobelt revant kant. Pretarade tresösm tivande ten. Plangar preknonade analiga, mid.
      Telekropekådade. Lorem ipsum tobelt revant kant. Pretarade tresösm tivande ten. Plangar preknonade
      analiga, mid.
    </p>
  </div>

<div className="flex flex-col pr-8 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-[50%]">
  <div className="flex flex-col space-y-4 text-sm font-sans w-full md:w-[40%]">
    <div className="bg-transparent bg-opacity-40 shadow-sm shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center w-full whitespace-nowrap">
      How are you doing?
    </div>
    <div className="bg-transparent shadow-sm bg-opacity-60 shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center w-full whitespace-nowrap">
      I'm talking from XEON Firm
    </div>
  </div>

  {/* Button */}
  <button className="p-6 md:p-8 rounded-full border border-purple-600 bg-transparent shadow-inner shadow-pink-500/60 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
    <img src={mic} alt="mic" className="w-12 h-6 md:w-18 md:h-8" />
  </button>

  <div className="flex flex-col space-y-4 text-sm font-sans w-full md:w-[30%]">
    <div className="bg-transparent bg-opacity-60 shadow-sm shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center whitespace-nowrap">
      Have a nice day.
    </div>
    <div className="bg-transparent shadow-sm bg-opacity-60 shadow-pink-200 rounded-full px-4 py-2 text-sm text-gray-400 text-center whitespace-nowrap">
      How can I help you
    </div>
  </div>
</div>

</div>

  
 

<div className="flex flex-col md:flex-row justify-between px-8 py-10 space-y-8 md:space-y-0 md:space-x-12 mt-20">

  <div className="max-w-lg text-left">
    <h1 className="text-3xl md:text-4xl py-6 font-space-grotesk leading-tight">
      Why Choose <br />
      <span className="text-pink-500">Swatify?</span>
    </h1>
    <p className="text-gray-400">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi tempora consequuntur ex corrupti pariatur ratione minima. Molestias, tempora, minima optio illo eveniet ad molestiae cum libero, mollitia doloribus ullam saepe.
    </p>
    <button className="font-space-grotesk bg-gradient-to-r from-purple-600 to-orange-400 px-6 py-2 rounded-full text-white mt-4">
      Request a Demo
    </button>
  </div>

<div className="flex flex-col mt-20 items-start mx-auto pl-4 md:ml-[-20%] py-2 text-left md:pr-20 w-full md:w-2/3 space-y-4">

<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={revenue} alt="ai" className="w-10 h-6" />
  </button>
  <div className="flex flex-col items-start">
    <h2 className="text-2xl  text-white">Increase Revenue</h2>
    <p className="text-gray-300 ">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-400 border-dashed w-full my-4 last:hidden"></div>

<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={analytics} alt="ai" className="w-10 h-6" />
  </button>
  <div className="flex flex-col items-start">
    <h2 className="text-2xl leading-tight">Reduce Costs</h2>
    <p className="text-gray-300">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={increase} alt="ai" className="w-10 h-6" />
  </button>
  <div>
    <h2 className="text-2xl leading-tight">Increased Capacity</h2>
    <p className="text-gray-300">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={service} alt="service" className="w-10 h-6" />
  </button>
  <div>
    <h2 className="text-2xl leading-tight">Improved Customer Service</h2>
    <p className="text-gray-300">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={ai} alt="ai" className="w-12 h-6" />
  </button>
  <div>
    <h2 className="text-2xl leading-tight">Stay Ahead with AI</h2>
    <p className="text-gray-300">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4"></div>
</div>
</div>
  

<div class="flex flex-col items-center justify-center  p-8">

  <h1 class="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 text-center">
    How Our <span class="text-pink-500">Voice Agent</span><br/> Works for You</h1>
  <p class="text-lg text-gray-400 text-center max-w-lg mb-16">
    Easily automate call handling and appointment scheduling, freeing up your team to focus on what matters.</p>

   
    
    <div className="hidden sm:block">
  <div className="relative grid grid-cols-2 text-left gap-8 max-w-4xl mx-auto">
  
    {/* Column 1 - Top Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform -translate-y-8">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Get Started With Minimal Effort</h2>
      <p className="text-gray-300 text-sm">Our voice agent integrates smoothly with your existing setup, getting you up and running fast—no complex configurations.</p>
    </div>
  
    {/* Column 2 - Top Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform translate-y-24">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Let Your Agent Handle The Basics</h2>
      <p className="text-gray-300 text-sm">Our solution answers calls, gathers essential information, and schedules appointments, reducing manual tasks.</p>
    </div>
  
    {/* Dashed Lines - Desktop Only */}
    <div className="absolute top-[calc(0%+3rem)] right-8 w-[calc(23%+15px)] h-[20px] border-t border-dashed border-purple-500 transform translate-y-[-50%] right-60"></div>
    <div className="absolute top-[calc(4%+3rem)] left-[calc(70%+2rem)] h-[58px] border-l border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(70%+2rem)]"></div>
  
    {/* Column 1 - Bottom Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform translate-y-12">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Monitor Key Interactions</h2>
      <p className="text-gray-300 text-sm">Stay informed with real-time insights and easily track appointments and call outcomes from a simple dashboard.</p>
    </div>
  
    {/* Column 2 - Bottom Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 transform translate-y-44">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-xl text-white font-semibold">Ongoing Updates & Enhancements</h2>
      <p className="text-gray-300 text-sm">Our voice agent continuously adapts and improves to keep meeting your evolving needs.</p>
    </div>
  
    <div className="absolute top-[calc(60%+6rem)] right-8 w-[calc(23%+14px)] h-[20px] border-t border-dashed border-purple-500 transform translate-y-[-50%] right-60"></div>
    <div className="absolute top-[calc(65%+6rem)] left-[calc(70%+2rem)] h-[60px] border-l border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(70%+2rem)]"></div>
  
    <div className="absolute top-[calc(18%+10rem)] left-[calc(20%+2rem)] w-[calc(26%+16px)] h-[20px] border-t border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(20%+2rem)]"></div>
    <div className="absolute top-[calc(15%+12rem)] left-[calc(20%+2rem)] h-[54px] border-l border-dashed border-purple-500 transform translate-y-[-50%] left-[calc(20%+2rem)]"></div>

  </div>
</div>




   {/* mobile view */}
<div className="block sm:hidden">
  <div className="relative grid grid-cols-1 text-left gap-6 max-w-md mx-auto">

    {/* Column 1 - Top Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Get Started With Minimal Effort</h2>
      <p className="text-gray-300 text-sm">Our voice agent integrates smoothly with your existing setup, getting you up and running fast—no complex configurations.</p>
      
      {/* Dashed Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] h-6 border-l-2 border-dashed border-purple-500"></div>
    </div>

    {/* Column 2 - Top Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Let Your Agent Handle The Basics</h2>
      <p className="text-gray-300 text-sm">Our solution answers calls, gathers essential information, and schedules appointments, reducing manual tasks.</p>
      
      {/* Dashed Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] h-6 border-l-2 border-dashed border-purple-500"></div>
    </div>

    {/* Column 1 - Bottom Left Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-300 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={shuttle} alt="shuttle" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Monitor Key Interactions</h2>
      <p className="text-gray-300 text-sm">Stay informed with real-time insights and easily track appointments and call outcomes from a simple dashboard.</p>
      
      {/* Dashed Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] h-6 border-l-2 border-dashed border-purple-500"></div>
    </div>

    {/* Column 2 - Bottom Right Card */}
    <div className="bg-transparent p-6 rounded-2xl border border-gray-400 shadow-sm shadow-gray-300 flex flex-col items-start space-y-4 bg-opacity-80 relative">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img src={Call} alt="phone" className="w-6 h-6" />
      </span>
      <h2 className="text-lg text-white font-semibold">Ongoing Updates & Enhancements</h2>
      <p className="text-gray-300 text-sm">Our voice agent continuously adapts and improves to keep meeting your evolving needs.</p>
    </div>

  </div>
</div>










</div>


<div className="flex flex-col md:flex-row px-6 mt-6 md:mt-28 justify-between py-12 space-y-8 md:space-y-0 md:space-x-12">

  <div className="max-w-lg text-left">
    <h1 className="text-2xl md:text-4xl font-space-grotesk font-semibold text-white mb-6">
      <span className="text-violet-700">Sawtify</span> Simplifies Your <br /> Business
    </h1>
    <p className="text-md text-white">
      Sawtify voice agents can handle a wide range of essential tasks, helping you serve clients faster, stay organized, and focus on growth. See how it can make a difference in your daily operations.
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row px-6 max-w-screen-xl mx-auto font-space-grotesk space-y-6 md:space-y-0 md:space-x-6 justify-center items-center">

<div className="w-full md:w-[35%] overflow-x-auto flex md:grid md:grid-cols-1 gap-2 text-left text-white scrollbar-hide">
  {[
    'Call Routing',
    'Answering FAQs',
    'Bookings & Reservations',
    'Billing Inquiries & Appointments',
    'Client Intake Pre-Screening',
    'Prequalifying New Clients',
    'Service Scheduling',
  ].map((item, index) => (
    <div
      key={index}
      className="bg-transparent border border-pink-300 p-3 rounded-3xl shadow-sm shadow-pink-200 flex items-center space-x-3 w-full min-w-[250px] mx-auto md:w-full"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-400">
        <img src={icons[index]} alt={`${item} icon`} className="w-5 h-5" />
      </div>

      <span className="text-sm">{item}</span>
    </div>
  ))}
</div>


  <div className="w-full md:w-[35%] mt-4 mx-auto bg-transparent border border-purple-400 text-left p-4 rounded-3xl shadow-m shadow-gray-500/50 flex flex-col justify-between">
    <h2 className="text-lg md:text-xl font-bold text-purple-200 mt-3 p-2">Call Routing</h2>
    <p className="text-white text-sm mb-2">
      Efficiently direct calls to the right person or department, improving response times and customer satisfaction.
    </p>
    <p className="text-pink-500 text-sm mb-2">
      Reduces caller wait time by 30-45%, leading to quicker resolutions and happier clients.
    </p>
    <div className="mt-3 p-3 bg-transparent border border-purple-300 rounded-3xl shadow-lg shadow-gray-500/50 flex flex-col justify-between">
      <h3 className="text-sm md:text-lg font-semibold text-purple-200 mb-2">Demo</h3>
      <p className="text-white text-xs mb-2">
        Efficiently direct calls to the right person or department.<br />Improving response time and customer satisfaction.
      </p>
      <div className="relative w-full mt-3">
        <img
          src={MyImage}
          alt="Demo Illustration"
          className="w-full h-40 rounded-xl mx-auto"  
        />
        <button
          className="absolute inset-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-60 text-white border border-gray-400 rounded-full shadow-sm shadow-purple-200"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <img
            src={Play}
            alt="Play Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  </div>
</div>


<div className="w-full max-w-5xl mx-auto mt-16 py-20 px-6 rounded-3xl bg-gradient-to-br from-purple-700 via-pink-400 to-orange-500 shadow-lg text-white">
  <h1 className="text-4xl md:text-5xl font-semibold font-space-grotesk mb-4 py-2 text-center">
    Ready to start <br /> your project
  </h1>
  <p className="text-sm md:text-lg mb-6 text-center">
    Contact us today to schedule a free consultation or <br /> request a demo for our solutions
  </p>
  <div className="flex justify-center">
    <button className="bg-white text-pink-500 px-6 py-3 rounded-full font-space-grotesk  text-lg hover:bg-purple-500 hover:text-white transition-all">
      Request A Demo ➡
    </button>
  </div>
</div>

      </main>
    </div>
  );
}

export default Home;
