import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const Home = () => {
  axios.defaults.withCredentials=true;
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3000/home')
    .then(result=>{
      console.log(result)
      if(result.data!=="sucess"){
        // navigate('/login')
      }

    })
    .catch(err=>console.log(err))
        
        


  },[])
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Welcome to Your Aesthetic Home Page
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Create beautiful web experiences with the power of React and Tailwind CSS.
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Discover the amazing benefits of building with React and Tailwind CSS.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600">Fast Development</h3>
              <p className="mt-2 text-gray-600">
                Build and iterate quickly with reusable components and utility-first styling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600">Responsive Design</h3>
              <p className="mt-2 text-gray-600">
                Tailwind CSS makes it simple to create designs that look great on any device.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600">Highly Customizable</h3>
              <p className="mt-2 text-gray-600">
                Tailwind's utility classes let you style your application exactly how you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
