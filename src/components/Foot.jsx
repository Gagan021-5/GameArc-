import React from 'react'
import { Link } from 'react-router-dom'
const Foot = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white text-center p-4">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 GameArc. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="privacy" className="hover:underline text-sm">
              Privacy
            </Link>
            <Link to="terms" className="hover:underline text-sm">
              Terms
            </Link>
            <Link to="contact" className="hover:underline text-sm">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    
    </>
  )
}

export default Foot
