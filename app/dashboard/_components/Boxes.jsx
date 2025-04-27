"use client";
import React from 'react'

function Boxes() {
  return (
    <div className="flex justify-center gap-6 p-10">
    
    <div className="bg-blue-500 text-white rounded-lg shadow-2xl p-6 w-80 hover:scale-105 transition-transform cursor-pointer">
      <h2 className="text-xl font-medium mb-2">
        Schedule an Interview with a professional
      </h2>
      <p className="text-sm">
        Choose the best time for you to meet one of the best HR's in the world.
      </p>
    </div>

  
    <div className="bg-gray-300 text-gray-800 rounded-lg shadow-2xl p-6 w-80 hover:scale-105 transition-transform cursor-pointer">
      <h2 className="text-xl font-medium mb-2">
        Take a simulation test using ClickView AI
      </h2>
      <p className="text-sm">
        Simulate your interview with our powerful AI and its up to date questions.
      </p>
    </div>
  </div>
  )
}

export default Boxes