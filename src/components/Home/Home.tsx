import React, { useState, ChangeEvent } from 'react';
import Icon from "../../assets/click.png";
import Lupa from "../../assets/lupa-de-detetive.png";
import Card from "../Cards/Card";
import Card1 from "../Cards/Card1";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const [showCard1, setShowCard1] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterCategory, setFilterCategory] = useState<string | null>(null);

    const toggleCard = () => {
        setShowCard1(prevState => !prevState);
    };

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (category: string | null) => {
        setFilterCategory(category);
    };

    return (
        <div className="w-full">
            <header className="bg-red-900 py-4 flex justify-center">
                <div className="relative w-full px-6">
                    <input
                        type="text"
                        placeholder="Digite aqui..."
                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <img src={Lupa} alt="Search Icon" className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
            </header>

            <div className="mx-4 mt-6 flex flex-col">
                <h1 className="mb-4 text-xl font-bold">Catálogo</h1>
                <div className="flex mb-4">
                    <button onClick={toggleCard}><img src={Icon} width='40px' alt="icon" /></button>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1 justify-center">
                        <button onClick={() => handleFilterChange("Empadas")} className="w-4/4 border border-salmon hover:bg-salmon hover:border hover:border-red-900 transition duration-500 rounded-md mx-3 py-0.3 text-center text-lg">Empadas</button>
                        <button onClick={() => handleFilterChange("Sopas")} className="w-4/4 border border-salmon hover:bg-salmon hover:border hover:border-red-900 transition duration-500 rounded-md mx-3 py-0.5 text-center text-lg">Sopas</button>
                        <button onClick={() => handleFilterChange("Pastel")} className="w-4/4 border border-salmon hover:bg-salmon hover:border hover:border-red-900 transition duration-500 rounded-md mx-3 py-0.5 text-center text-lg">Pastel</button>
                        <button onClick={() => handleFilterChange("Pão de queijo")} className="w-4/4 border border-salmon hover:bg-salmon hover:border hover:border-red-900 transition duration-500 rounded-md mx-3 py-0.5 text-center text-lg">Pão de queijo</button>
                    </div>
                </div>
                {showCard1 ? <Card1 searchTerm={searchTerm} filterCategory={filterCategory} /> : <Card searchTerm={searchTerm} filterCategory={filterCategory} />}
            </div>
        </div>
    )
}

export default Home;
