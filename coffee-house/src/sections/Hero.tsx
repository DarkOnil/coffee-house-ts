const Hero = () => {
    return (
        <section id="home" className="bg-amber-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

                {/* Текст */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="text-amber-800 font-semibold mb-4">
                        ☕ ДОБРО ПОЖАЛОВАТЬ В COFFEE HOUSE
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 leading-tight">
                        Начни свой день с чашечки кофе
                    </h1>

                    <p className="text-gray-600 text-lg mt-6 mb-8">
                        Наслаждайся ароматным кофе, уютной атмосферой
                        и вкусными десертами каждый день.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#prices"
                            className="bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition"
                        >
                            Наше меню
                        </a>

                        <a
                            href="#contacts"
                            className="border border-amber-800 text-amber-900 px-8 py-3 rounded-full hover:bg-amber-100 transition"
                        >
                            Связаться с нами
                        </a>
                    </div>
                </div>

                {/* Фотография */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000"
                        alt="Чашка ароматного кофе"
                        className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;