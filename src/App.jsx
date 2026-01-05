import './index.css'
import ContactForm from './Component/ContactForm'


function App() {


  return (

    <div className='min-h-screen flex flex-col text-black'>
      <header className='h-16 bg-white flex items-center justify-between fixed w-full px-6 md:px-8 top-0 z-10'>
        <h1 className='text-2xl md:text-2xl font-bold'>  Manka Travel</h1>
        <nav className='space-x-6 font-bold hidden md:block'>

          <a href="#home" className='hover:underline hover:rounded-lg hover:shadow-xl hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 inline-block px-2 py-1'>Home</a>
          <a href="#about" className='hover:underline hover:rounded-lg hover:shadow-xl hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 inline-block px-2 py-1'>About</a>
          <a href="#services" className='hover:underline hover:rounded-lg hover:shadow-xl hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 inline-block px-2 py-1'>Service</a>
          <a href="#clients" className='hover:underline hover:rounded-lg hover:shadow-xl hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 inline-block px-2 py-1'>Clients</a>
          <a href="#contact" className='hover:underline hover:rounded-lg hover:shadow-xl hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 inline-block px-2 py-1'>Contact</a>
          <button type='button' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className='px-6 py-3 rounded-lg shadow-xl bg-gradient-to-r from-indigo-400 to-indigo-600 hover:opacity-90 text-white transition duration-300' aria-controls='contact' aria-label='Scroll to contact'>Get Started</button>
         
        </nav>
      </header>
      <section id='home' className='min-h-screen pt-16 bg-indigo-50 text-center  flex-col justify-center items-center flex'>
        <div className='mt-8 mb-6 flex justify-center'>
                  <button className='text-indigo-600 bg-white px-4 py-2 rounded-lg border shadow hover:bg-indigo-100 transition duration-200 inline-flex items-center gap-3 md:px-6 md:py-2'>
                    <span className='inline-block w-2.5 h-2.5 rounded-full bg-indigo-600' aria-hidden='true'></span>
                    <span className='text-sm md:text-base'>Trusted 500+ Companies</span>
                  </button>
                </div>

        <h1 className='text-2xl font-bold mb-4'> Book Your Bus Tickets Quickly & Securely</h1>
         <h2 className='text-2xl font-bold mb-4'> Fast, Reliable, and Comfortable Travel at Your Fingertips</h2>
        <p className='text-gray-700 mb-6 text-sm md:text-base '>Choose your route, select your seats, and pay online effortlessly. Travel smart and stress-free with BusBooking!</p>
          <div className='mt-4 flex justify-center gap-4'>
          <button type='button' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className='px-6 py-3 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg shadow-xl text-white hover:opacity-90 transition duration-300' aria-controls='contact' aria-label='Scroll to contact'>Get Started</button>
          <button type='button' onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className='px-6 py-3 bg-white text-indigo-600 rounded-lg shadow hover:bg-indigo-100 transition duration-300 inline-flex items-center gap-2' aria-controls='services' aria-label='Scroll to services'>
            <svg className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path d='M4 4l12 6-12 6V4z' />
            </svg>
            Watch Demo
          </button>
        </div>
      </section>

         {/* About */}
        
       

        <section id="about" className='min-h-screen pt-16 text-center bg-indigo-50 text-black'>
        <div className='mt-8 mb-6 flex justify-center'>
                  <button className='text-indigo-600 bg-white px-4 py-2 rounded-lg border shadow hover:bg-indigo-100 transition duration-200 inline-flex items-center gap-3 md:px-6 md:py-2'>
                    <span className='inline-block w-2.5 h-2.5 rounded-full bg-indigo-600' aria-hidden='true'></span>
                    <span className='text-sm md:text-base'>About Our Company</span>
                  </button>
                </div>
          {/* <h1 className='text-2xl font-bold mb-4'>About</h1> */}
          <p className='max-w-xl m-auto text-sm md:text-base text-black'>
            BusBooking makes intercity travel simple and stress-free. We aggregate trusted carriers, show real-time availability and seat maps, and let you complete a secure booking in moments. With clear fares, instant e‑tickets, flexible cancellation options, and 24/7 customer support, we help you plan and travel with confidence.
          </p>
          <div className='mt-6 flex flex-col md:flex-row md:justify-center gap-4 max-w-3xl mx-auto'>
            <div className='p-4 bg-indigo-400 rounded-lg shadow-xl hover:bg-indigo-500 transition duration-300'>
              <h3 className='font-semibold text-black'>Quick Booking</h3>
              <p className='text-sm text-black'>Find routes and reserve seats in under a minute.</p>
            </div>
            <div className='p-4 bg-indigo-400 rounded-lg shadow-xl hover:bg-indigo-500 transition duration-300'>
              <h3 className='font-semibold text-black'>Secure Payments</h3>
              <p className='text-sm text-black'>PCI‑compliant checkout and instant e‑tickets.</p>
            </div>
            <div className='p-4 bg-indigo-400 rounded-lg shadow-xl hover:bg-indigo-500 transition duration-300'>
              <h3 className='font-semibold text-black'>24/7 Support</h3>
              <p className='text-sm text-black'>Travel alerts and customer help whenever you need it.</p>
            </div>
          </div>
        </section>

          {/* Services */}

          <section id='services' className='min-h-screen pt-16 text-center bg-indigo-50 text-black'>
             <div className='mt-8 mb-6 flex justify-center'>
                  <button className='text-indigo-600 bg-white px-4 py-2 rounded-lg border shadow hover:bg-indigo-100 transition duration-200 inline-flex items-center gap-3 md:px-6 md:py-2'>
                    <span className='inline-block w-2.5 h-2.5 rounded-full bg-indigo-600' aria-hidden='true'></span>
                    <span className='text-sm md:text-base'>Our Expertise</span>
                  </button>
                </div>
            {/* <h1 className='text-2xl font-bold mb-4'>Services</h1> */}
            <p className='max-w-xl m-auto mb-6'>We provide a full suite of bus booking tools — fast reservation, seat maps, secure payments, live updates, and flexible policies for every traveler.</p>

            <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
              <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300'>
                <svg className='w-6 h-6 text-indigo-600' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M3 13h2V7h14v6h2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8z' />
                  <path d='M3 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm18 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' />
                </svg>
                <h3 className='font-semibold text-lg mt-3'>Instant Booking</h3>
                <p className='text-sm mt-2'>Search routes, pick seats and pay — get an e‑ticket instantly.</p>
              </div>

              <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300'>
                <svg className='w-6 h-6 text-indigo-600' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M4 6h16v10H4z' />
                  <path d='M8 12h8v2H8z' />
                </svg>
                <h3 className='font-semibold text-lg mt-3'>Seat Selection</h3>
                <p className='text-sm mt-2'>Interactive seat maps let you choose the best seats available.</p>
              </div>

              <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300'>
                <svg className='w-6 h-6 text-indigo-600' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 1l3 6h5l-4 3 1 6-5-3-5 3 1-6-4-3h5z' />
                </svg>
                <h3 className='font-semibold text-lg mt-3'>Secure Payments</h3>
                <p className='text-sm mt-2'>PCI‑compliant checkout with multiple payment options.</p>
              </div>

              <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300'>
                <svg className='w-6 h-6 text-indigo-600' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 2l9 4v6c0 5-4 9-9 9s-9-4-9-9V6l9-4z' />
                </svg>
                <h3 className='font-semibold text-lg mt-3'>Live Updates</h3>
                <p className='text-sm mt-2'>Real-time schedule and route updates so you travel worry‑free.</p>
              </div>

              <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300'>
                <svg className='w-6 h-6 text-indigo-600' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M3 6h18v2H3zM3 12h12v2H3zM3 18h6v2H3z' />
                </svg>
                <h3 className='font-semibold text-lg mt-3'>Group & Corporate</h3>
                <p className='text-sm mt-2'>Flexible group bookings and corporate accounts with bulk discounts.</p>
              </div>

              <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300'>
                <svg className='w-6 h-6 text-indigo-600' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M12 1a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 13H11v-6h2z' />
                </svg>
                <h3 className='font-semibold text-lg mt-3'>Flexible Policies</h3>
                <p className='text-sm mt-2'>Easy cancellations, refunds and 24/7 customer support.</p>
              </div>
            </div>
          </section>

          {/* Clients */}
          <section id='clients' className='min-h-screen pt-16 text-center bg-white text-black'>
            <div className='mt-8 mb-6 flex justify-center'>
                  <button className='text-indigo-600 bg-white px-4 py-2 rounded-lg border shadow hover:bg-indigo-100 transition duration-200 inline-flex items-center gap-3 md:px-6 md:py-2'>
                    <span className='inline-block w-2.5 h-2.5 rounded-full bg-indigo-600' aria-hidden='true'></span>
                    <span className='text-sm md:text-base'>Happy Travelers</span>
                  </button>
                </div>

            <h1 className='text-2xl font-bold mb-4'>Trusted by passengers & partners</h1>
            <p className='max-w-xl m-auto mb-8'>We partner with trusted carriers and serve thousands of happy travelers every month.</p>

            <div className='max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center px-4'>
              <div className='p-4 flex items-center justify-center bg-indigo-50 rounded-lg'>
                <span className='font-semibold text-indigo-600'>TransLine</span>
              </div>
              <div className='p-4 flex items-center justify-center bg-indigo-50 rounded-lg'>
                <span className='font-semibold text-indigo-600'>GoExpress</span>
              </div>
              <div className='p-4 flex items-center justify-center bg-indigo-50 rounded-lg'>
                <span className='font-semibold text-indigo-600'>CityBus</span>
              </div>
              <div className='p-4 flex items-center justify-center bg-indigo-50 rounded-lg'>
                <span className='font-semibold text-indigo-600'>RouteMasters</span>
              </div>
              <div className='p-4 flex items-center justify-center bg-indigo-50 rounded-lg'>
                <span className='font-semibold text-indigo-600'>TravelCo</span>
              </div>
              <div className='p-4 flex items-center justify-center bg-indigo-50 rounded-lg'>
                <span className='font-semibold text-indigo-600'>ExpressLine</span>
              </div>
            </div>

            <div className='mt-12 max-w-3xl mx-auto'>
              <blockquote className='bg-indigo-50 p-6 rounded-lg shadow'>
                <p className='text-lg italic'>"Booking was fast and easy — seats were exactly as shown and customer support helped quickly when my plans changed."</p>
                <cite className='mt-3 block font-semibold'>— Amina, Frequent Traveler</cite>
              </blockquote>
            </div>
          </section>
          {/* Contact us */}

          <section id='contact' className='min-h-screen pt-16 text-center bg-indigo-50 '>
            <div className='mt-8 mb-6 flex justify-center'>
                  <button className='text-indigo-600 bg-white px-4 py-2 rounded-lg border shadow hover:bg-indigo-100 transition duration-200 inline-flex items-center gap-3 md:px-6 md:py-2'>
                    <span className='inline-block w-2.5 h-2.5 rounded-full bg-indigo-600' aria-hidden='true'></span>
                    <span className='text-sm md:text-base'>Get in Touch</span>
                  </button>
                </div>
            {/* <h1 className='text-2xl font-bold mb-4'>Contact Us</h1> */}
          <ContactForm />
          </section>
<footer className='mt-auto bg-gray-900 text-white'>
  <div className='max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6'>
    <div className='md:w-1/3'>
      <h3 className='text-lg font-bold'>BusBooking</h3>
      <p className='text-sm text-gray-300 mt-1'>Trusted bus reservations made easy.</p>
    </div>

    <div className='flex gap-8 md:gap-12 md:w-1/3 justify-center'>
      <nav className='flex flex-col md:flex-row gap-4 md:gap-6 text-gray-300'>
        <a href='#home' className='hover:text-white'>Home</a>
        <a href='#about' className='hover:text-white'>About</a>
        <a href='#services' className='hover:text-white'>Services</a>
        <a href='#contact' className='hover:text-white'>Contact</a>
      </nav>
    </div>

    <div className='flex items-center gap-4 md:w-1/3 justify-center md:justify-end'>
      <a href='#' aria-label='Twitter' className='text-gray-300 hover:text-white'>
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          <path d='M22 5.92c-.7.31-1.45.52-2.24.61.81-.49 1.43-1.27 1.72-2.2-.76.45-1.6.77-2.5.95A4.04 4.04 0 0012.8 9.7c0 .32.04.64.1.94-3.36-.17-6.34-1.78-8.33-4.23-.35.6-.55 1.29-.55 2.03 0 1.4.71 2.63 1.78 3.35-.66-.02-1.28-.2-1.82-.5v.05c0 1.96 1.4 3.6 3.25 3.98-.34.1-.7.16-1.07.16-.26 0-.52-.03-.77-.07.52 1.6 2.03 2.77 3.82 2.81A8.13 8.13 0 012 19.54a11.47 11.47 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53c.8-.56 1.49-1.26 2.04-2.06-.73.33-1.52.55-2.34.65z' />
        </svg>
      </a>
      <a href='#' aria-label='Facebook' className='text-gray-300 hover:text-white'>
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          <path d='M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.07c-1.06 0-1.4.67-1.4 1.36v1.64h2.39l-.38 2.9h-2v7A10 10 0 0022 12z' />
        </svg>
      </a>
      <a href='#' aria-label='LinkedIn' className='text-gray-300 hover:text-white'>
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          <path d='M4.98 3.5a2.5 2.5 0 11.02 0zM3 8.98h4v12H3zM8.98 8.98h3.84v1.64h.05c.54-1.03 1.87-2.12 3.84-2.12 4.1 0 4.86 2.7 4.86 6.2v7.3h-4v-6.47c0-1.54-.03-3.5-2.13-3.5-2.13 0-2.45 1.66-2.45 3.38v6.59h-4z' />
        </svg>
      </a>
    </div>
  </div>
  <div className='border-t border-gray-800 py-4'>
    <div className='max-w-7xl mx-auto px-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-3'>
      <span>© 2026 BusBooking. All rights reserved.</span>
      <span>Made with ❤️</span>
    </div>
  </div>
</footer>
       
    </div>
  )
}

export default App
