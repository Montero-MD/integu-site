import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/integu-logo.png"
        alt="Integu Logo"
        width={200}
        height={50}
      />
    </Link>
  );
};

export default Logo;
