const Footer = () => {
    return (
        <footer id="contacts" className="bg-amber-950 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            ☕ Coffee House
                        </h2>
                        <p className="text-amber-200">
                            Место, где каждый день начинается с хорошего кофе.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Навигация</h3>
                        <ul className="space-y-3 text-amber-200">
                            <li><a href="#home">Главная</a></li>
                            <li><a href="#advantages">Преимущества</a></li>
                            <li><a href="#prices">Меню</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Контакты</h3>
                        <ul className="space-y-3 text-amber-200">
                            <li>Бишкек, Кыргызстан</li>
                            <li>+996 555 123 456</li>
                            <li>coffee@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
                        <ul className="space-y-3 text-amber-200">
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-amber-800 mt-12 pt-6 text-center text-amber-300">
                    © 2026 Coffee House. Все права защищены.
                </div>

            </div>
        </footer>
    );
};

export default Footer;