import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-50 min-h-screen flex flex-col items-center pt-8 sm:pt-12 font-sans">
    <header className="w-full max-w-5xl px-4 flex justify-between items-center mb-8">
        <p className="font-extrabold text-2xl tracking-tighter text-gray-900">navan</p>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Need help?</a>
    </header>
    <main className="flex-grow flex items-start sm:items-center justify-center w-full p-4">
        {children}
    </main>
  </div>
);

export default AuthLayout;