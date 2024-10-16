import { FiCode, FiDatabase, FiLayers, FiSmartphone, FiCloud, FiTrendingUp } from 'react-icons/fi';

export default function WeCanHelpYouWith() {
    const capabilities = [
        { icon: FiCode, title: "Web Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { icon: FiDatabase, title: "Database Management", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { icon: FiLayers, title: "UI/UX Design", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
        { icon: FiSmartphone, title: "Mobile App Development", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
        { icon: FiCloud, title: "Cloud Solutions", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui." },
        { icon: FiTrendingUp, title: "Digital Marketing", description: "Officia deserunt mollit anim id est laborum." },
    ];

    return (
        <div className="mx-auto px-4 max-w-7xl bg-[#0a0a0a] py-4 mt-44">
            <p className="text-center text-base mb-2 text-white">Empowering businesses with cutting-edge technology solutions</p>
            <h2 className="text-5xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {capabilities.map((item, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg shadow-md h-72">
                        <item.icon className="text-4xl text-[#B9FD50] mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}