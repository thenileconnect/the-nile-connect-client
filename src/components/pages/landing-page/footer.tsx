import { FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

import Image from "next/image"
export default function Footer(){
    return (
        <footer className="text-white pl-5 mt-40">
        <div className="container mx-auto flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left flex flex-col justify-center space-y-8">
            <div className="text-2xl font-bold mb-2">NileConnect</div>
            <p className='text-xs opacity-70 pr-5'>
            My Speciality Dental Clinic in Addis Ababa provides expert dental care with a focus on personalized service, advanced technology, and patient comfort.
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="#" className="text-accent hover:text-gray-600"><FaFacebookF /></a>
              <a href="#" className="text-accent hover:text-gray-600"><FaTwitter /></a>
              <a href="#" className="text-accent hover:text-gray-600"><FaInstagram /></a>
              <a href="#" className="text-accent hover:text-gray-600"><FaLinkedin /></a>
            </div>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left flex flex-col space-y-8">
            <h2 className="font-bold mb-2">Contact us</h2>
            <p className="text-sm flex items-center"><FaMapMarkerAlt className="mr-4 text-accent" /> Victor Tower 2nd floor, S Africa St, Addis Ababa</p>
            <p className="text-sm flex items-center"><FaPhone className="mr-4 text-accent" /> +251 96 123 3333</p>
            <p className="text-sm flex items-center"><FaEnvelope className="mr-4 text-accent" /> support@example.com</p>
            <p className="text-sm flex items-center"><FaClock className="mr-4 text-accent" /> 8am - 9pm</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center flex flex-col space-y-8">
            <h2 className="font-bold mb-2">More Information</h2>
            <p><a href="#" className="hover:text-gray-600 text-sm">Copyright</a></p>
            <p><a href="#" className="hover:text-gray-600 text-sm">Privacy Policy</a></p>
            <p><a href="#" className="hover:text-gray-600 text-sm">Terms & Conditions</a></p>
            <p><a href="#" className="hover:text-gray-600 text-sm">Sitemap</a></p>
          </div>
          <div className="w-full md:w-1/5 text-center flex flex-col space-y-8">
            <h2 className="font-bold mb-2">Quick Links</h2>
            <p><a href="#" className="hover:text-gray-600 text-sm">About us</a></p>
            <p><a href="#" className="hover:text-gray-600 text-sm">Services</a></p>
            <p><a href="#" className="hover:text-gray-600 text-sm">Testimonials</a></p>
            <p><a href="#" className="hover:text-gray-600 text-sm">FAQ</a></p>
          </div>
        </div>
        <div className="container mx-auto mt-8 flex flex-wrap justify-between items-center text-gray-600">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0 text-sm">
            <p>NileConnect {new Date().getFullYear().toString()}. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    )
}