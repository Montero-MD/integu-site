"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className="bg-[#1E88B8] text-white py-8 bottom-0 left-0 w-full"> {/* Fixed footer at the bottom */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Integu Special Offers */}
        <div>
          <h2 className="text-6xl font-bold mb-4">Integu</h2>
          <h4 className="text-lg font-bold mb-4">Special Offers</h4>
          {/* Placeholder Content */}
        </div>

        {/* Work with Us */}
        <div>
          <h4 className="text-lg font-bold mb-4">Work with Us</h4>
          <ul>
            <li><Link href="#" className="block hover:underline">Investors</Link></li>
            <li><Link href="#" className="block hover:underline">Partners</Link></li>
            <li><Link href="#" className="block hover:underline">Suppliers</Link></li>
            <li><Link href="#" className="block hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
          <ul>
            <li><Link href="#" className="block hover:underline">Contact Us</Link></li>
            <li>
              <Link href="#" className="inline-block mr-2">
                <FacebookIcon fontSize='large'/>
              </Link>
              <Link href="#" className="inline-block">
                <InstagramIcon fontSize='large'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Privacy Policy */}
      <div className="container mx-auto px-4 mt-8 border-t border-blue-300 pt-4 flex justify-between items-center">
        <p>© Integu Philippines, Inc. All Rights Reserved.</p>
        <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
