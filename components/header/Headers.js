import Link from 'next/link';
import React from 'react';

const Headers = () => {
  return (
    <nav>
      <div className="navbar justify-between bg-accent-content text-secondary-content">
        <div className="flex justify-start">
          <Link href="/" className="btn btn-ghost text-2xl">
            Abstract
          </Link>
          <h2 className="text-2xl"> | </h2>
          <Link href="/" className="btn btn-ghost text-2xl font-light">
            Help Center
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="btn btn-outline text-white text-lg rounded-btn"
            >
              {' '}
              Submit a Request
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="btn btn-primary text-lg font-light rounded-btn"
            >
              {' '}
              Sing In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headers;
