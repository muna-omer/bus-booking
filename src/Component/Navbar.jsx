import react from 'react';

const Navbar = () => {
    return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
    <div className="max-w-7xl max-auto px-6 py-4 flex justify-between items-center">
        <div>
              <a href="#" className="font-semibold hover:text-blue-600 font-mono">
            <i className="fa-solid fa-umbrella-beach mr-3"></i>
                 Manka Travel
        </a>
        </div>
               <ul className='space-x-8 text-gray-700'>
        <li><a href='#home' className='hover:text-blue-600'></a>Home</li>
    </ul>
    </div>
    
</nav>
)

}




export default Navbar