const Advantages = () => {
    const advantages = [
        {
            icon: "☕",
            title: "Вкусный кофе",
            description: "Готовим кофе из качественных зёрен."
        },
        {
            icon: "🫘",
            title: "Свежие зёрна",
            description: "Используем только свежие кофейные зёрна."
        },
        {
            icon: "🍮",
            title: "Вкусные десерты",
            description: "Большой выбор свежей выпечки и десертов."
        },
        {
            icon: "🛋️",
            title: "Уютная атмосфера",
            description: "Создали комфортное место для отдыха."
        },
        {
            icon: "⚡",
            title: "Быстрое обслуживание",
            description: "Готовим твой любимый напиток без долгого ожидания."
        },
        {
            icon: "❤️",
            title: "Забота о гостях",
            description: "Каждому посетителю уделяем внимание."
        }
    ];

    return (
        <section id="advantages" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <p className="text-amber-800 font-semibold">
                        НАШИ ПРЕИМУЩЕСТВА
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mt-3">
                        Почему выбирают нас?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 bg-amber-50 rounded-2xl text-center hover:shadow-lg transition"
                        >
                            <div className="text-5xl mb-5">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-amber-950 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Advantages;