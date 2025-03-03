import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videohero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Translucent Card */}
      <div className="
        mt-30
        relative z-10
        bg-white bg-opacity-80 backdrop-blur-md
        p-4 sm:p-6 md:p-8
        rounded-lg
        w-full max-w-lg
        mx-auto
        md:mx-30
      ">
        {/* Top Row: Eskeen logo + "is now" */}
        <div className="flex items-center flex-wrap mb-4">
          <Image
            src="/eskeen-logo.png"
            alt="Eskeen Laboratories, Inc"
            width={200}
            height={50}
            className="max-w-full h-auto"
            priority
          />
          <p className="text-[#474856] ml-2 text-sm sm:text-base md:text-lg whitespace-nowrap">
            is now
          </p>
        </div>

        {/* Integu Logo & Tagline */}
        <div className="text-center">
          <Image
            src="/integu-logo.png"
            alt="Integu Philippines"
            width={600}
            height={195}
            className="mx-auto max-w-full h-auto"
            priority
          />
          <p className="text-[#1E88B8] mt-4 text-base sm:text-xl md:text-2xl">
            New brand. Same commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
