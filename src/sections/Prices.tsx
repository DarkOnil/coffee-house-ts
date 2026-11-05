const Prices = () => {
    const plans = [
        {
            name: "Начальный",
            price: "350 сом",
            description: "Для тех, кто любит кофе",
            features: ["Американо", "Эспрессо", "Чай"],
            popular: false
        },
        {
            name: "Любимый",
            price: "550 сом",
            description: "Для настоящих ценителей",
            features: ["Любой кофе", "Десерт на выбор", "Чай или лимонад"],
            popular: true
        },
        {
            name: "Премиум",
            price: "750 сом",
            description: "Максимум удовольствия",
            features: ["Два любых напитка", "Два десерта", "Дополнительный сироп"],
            popular: false
        }
    ];

    return (
        <section id="prices" className="py-20 bg-amber-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <p className="text-amber-800 font-semibold">
                        НАШИ ПРЕДЛОЖЕНИЯ
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mt-3">
                        Выбери свой тариф
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl bg-white shadow-md ${
                                plan.popular
                                    ? "border-2 border-amber-700 md:scale-105"
                                    : "border border-amber-100"
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-800 text-white px-5 py-2 rounded-full text-sm">
                                    Популярный
                                </span>
                            )}

                            <h3 className="text-2xl font-bold text-amber-950">
                                {plan.name}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                {plan.description}
                            </p>

                            <p className="text-3xl font-bold text-amber-800 mt-6">
                                {plan.price}
                            </p>

                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-gray-700">
                                        ✓ {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contacts"
                                className="block text-center mt-8 bg-amber-800 text-white py-3 rounded-full hover:bg-amber-900 transition"
                            >
                                Выбрать тариф
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Prices;