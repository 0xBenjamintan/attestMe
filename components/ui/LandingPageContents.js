import React from 'react';

const LandingPageContents = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl px-4 pt-8 pb-16">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-4">
                {/* Left Column (Image) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="./job.png" alt="Image" className="w-full" />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center">
                {/* Right Column (Title) */}
                <h1 className="text-4xl font-bold">
                    Welcome to <span className="text-blue-500">AttestMe</span>
                </h1>
                <p className="text-xl mt-8">Attest Me is a platform that allows you to verify your skills and experience in a way that is secure, private and easy to share.</p>
                <p className="text-lg mt-8 text-blue-500 font-bold ">Connect your wallet and try it out!</p>
            </div>
        </div>
    </div>

  );
};

export default LandingPageContents;
