import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden"> {/* Full screen height, center content, relative positioning, overflow hidden for video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videohero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container w-1/2 mt-30 ml-4 px-4 text-left relative z-10 bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-lg"> {/* White translucent background for card, rounded corners, padding, relative z-index */}
        <div className="flex items-center">
          <Image
            src="/eskeen-logo.png"
            alt="Eskeen Laboratories, Inc"
            width={200} // Adjust width as needed
            height={50} // Adjust height as needed
            className="ml-4"
          />
          <p className="text-black ml-2 text-left text-md">is now</p>
        </div>

        <Image
          src="/integu-logo.png"
          alt="Integu Philippines"
          width={600}
          height={195}
          className="mx-auto"
        />
        <p className="text-[#1E88B8] mt-4 text-center text-2xl">New brand. Same commitment.</p> {/* Original blue color */}
      </div>
    </section>
  );
};

export default Hero;
