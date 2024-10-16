import React from "react";
import { FiUser, FiSearch, FiMonitor } from "react-icons/fi";

export function HowWeWork() {
    const steps = [
        {
            icon: <FiUser className="h-8 w-8 text-black" />,
            title: "Register",
            description: "Find the perfect talent for your project"
        },
        {
            icon: <FiSearch className="h-8 w-8 text-black" />,
            title: "Get Talent",
            description: "Work seamlessly with your new team"
        },
        {
            icon: <FiMonitor className="h-8 w-8 text-black" />,
            title: "Work",
            description: "Achieve your goals with top tech talent"
        }
    ];

    return (
        <div className="flex flex-col items-center space-y-24 px-4 lg:px-8 max-w-7xl bg-[#0a0a0a] py-4 mt-8 md:mt-32">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-12">
                <div className="flex flex-col mb-8 lg:mb-0 lg:mr-8">
                    <span className="text-[#B9FD50] text-sm mb-2">How we work</span>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 max-w-xl text-white">Get a dedicated tech team at fraction of the cost</h2>
                </div>
                <div className="w-full lg:max-w-md flex flex-col items-start">
                    <p className="mb-8 text-sm lg:text-base text-white">
                        Grow your brand with top African tech talents for a flat monthly fee. 
                        Work with senior tech talents. Subscribe and make as many requests 
                        as you need - no limits.
                    </p>
                    <button className="w-full lg:w-auto bg-[#B9FD50] text-black px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
                        See pricing
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start space-x-0 md:space-x-32 items-start md:items-center w-full">
                {steps.map((step) => (
                    <React.Fragment key={step.title}>
                        <div className="flex flex-col items-start mb-8 lg:mb-0">
                            <div className="bg-[#B9FD50] rounded-full p-4 mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                            <p className="text-center opacity-70 text-white">{step.description}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}   