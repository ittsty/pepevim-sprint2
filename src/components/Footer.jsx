import React from 'react'

const Footer = () => {
  return (
    <footer className="h-63 bg-primary flex flex-col justify-end">
      <div className="h-full w-full flex items-start p-6">
        <img src="icon.png" alt="icon" class="h-8 mr-4" />
        <div class="w-90 h-full flex flex-col items-start">
          <img
            src="logo-m.png"
            alt="icon"
            className="w-auto h-8 object-contain shrink-0"
          />
          <h4 className="text-white text-xs mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </h4>
          <a className="text-white mt-auto"> back to top</a>
        </div>
        <div className="ml-auto pr-2">
          <ul className="flex flex-col gap-2 text-end p-2 text-sm text-white">
            <li>HOME</li>
            <li>COLLECTION</li>
            <li>ABOUT US</li>
            <li >CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-8 bg-[#8F1366]"></div>
    </footer>
  )
}

export default Footer