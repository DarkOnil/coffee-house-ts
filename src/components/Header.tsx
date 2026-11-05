import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-amber-900">
                    ☕ Coffee House
                </a>

                <nav className="hidden md:flex items-center gap-7">
                    <a href="#home" className="text-gray-700 hover:text-amber-800">
                        Главная
                    </a>
                    <a href="#advantages" className="text-gray-700 hover:text-amber-800">
                        Преимущества
                    </a>
                    <a href="#prices" className="text-gray-700 hover:text-amber-800">
                        Меню
                    </a>
                    <a href="#contacts" className="text-gray-700 hover:text-amber-800">
                        Контакты
                    </a>
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-gray-900"
                >
                    {menuOpen ? "X" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <nav className="md:hidden flex flex-col gap-4 px-6 pb-5">
                    <a href="#home" onClick={() => setMenuOpen(false)}>Главная</a>
                    <a href="#advantages" onClick={() => setMenuOpen(false)}> Преимущества</a>
                    <a href="#prices" onClick={() => setMenuOpen(false)}> Меню</a>
                    <a href="#contacts" onClick={() => setMenuOpen(false)}> Контакты</a>
                </nav>
            )}
        </header>
    );
};
export default Header;
