import Header from "./components/Header";
import Advantages from "./sections/Advantages";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Prices from "./sections/Prices";
import Button from "./components/Button";

const App = () => {
    return (
        <div>
            <Header />

            <main>
                <Hero />
                <Advantages />
                <Prices />
                
                <div className="flex flex-wrap justify-center gap-4 p-10">
    <Button variant="primary" size="small">
        Маленькая кнопка
    </Button>

    <Button variant="secondary" size="medium">
        Средняя кнопка
    </Button>

    <Button variant="primary" size="large">
        Большая кнопка
    </Button>
</div>
            </main>

            <Footer />
        </div>
    );
};

export default App;