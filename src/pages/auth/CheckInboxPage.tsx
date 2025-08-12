import { useState, useEffect } from 'react';

// Import the new icons
import GmailIcon from '../../components/icons/GmailIcon';
import OutlookIcon from '../../components/icons/OutlookIcon';

import PromoBanner from '../../components/shared/PromoBanner';
import ImageCarousel from '../../components/shared/ImageCarousel';

export default function CheckInboxPage() {
    const userEmail = "jsmith@content-mobbin.com";
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const intervalId = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const handleResendEmail = () => {
        console.log('Resending verification email...');
        alert('A new verification email has been sent!');
        setTimeLeft(15 * 60);
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center font-sans bg-white">
            <PromoBanner />
            <header className="w-full max-w-7xl px-8 pt-8 flex justify-between items-center">
                <p className="font-extrabold text-2xl tracking-tighter text-gray-900">navan</p>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Need help?</a>
            </header>

            <main className="flex-grow flex items-center justify-center w-full p-8 max-w-7xl">
                <div className="flex w-full">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:pr-16">
                        <div className="max-w-md w-full">
                            {/* You can replace this with a real SVG from Figma */}
                            <div className="p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Check your inbox</h1>
                            <p className="text-gray-600 mb-4">
                                We sent you an email to <span className="font-medium text-gray-800">{userEmail}</span>. You're one step away from verifying your account.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Your link expires in <span className="font-bold text-gray-800">{minutes}:{String(seconds).padStart(2, '0')}</span>
                            </p>
                            
                            {/* Updated buttons with icons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-center bg-white border border-gray-300 text-gray-800 font-bold py-2.5 px-4 rounded-md hover:bg-gray-50">
                                    <GmailIcon className="w-5 h-5" />
                                    <span>Open Gmail</span>
                                </a>
                                <a href="https://outlook.live.com" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-center bg-white border border-gray-300 text-gray-800 font-bold py-2.5 px-4 rounded-md hover:bg-gray-50">
                                    <OutlookIcon className="w-5 h-5 text-blue-600" />
                                    <span>Open Outlook</span>
                                </a>
                            </div>

                            {/* Styled and positioned "Resend email" link */}
                            <div className="text-center mt-8">
                                <button onClick={handleResendEmail} className="text-sm font-medium text-purple-600 hover:underline focus:outline-none">
                                    Resend email
                                </button>
                            </div>
                        </div>
                    </div>
                    <ImageCarousel />
                </div>
            </main>
        </div>
    );
}