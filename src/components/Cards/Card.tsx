

import React from 'react';
import { Produto } from '../../data/Data';
import getProdutos from '../../data/Data';

interface CardProps {
  searchTerm: string;
  filterCategory?: string | null; // tornando filterCategory opcional
}

const Card: React.FC<CardProps> = ({ searchTerm, filterCategory }) => {
  const produtos: Produto[] = getProdutos();

  // Filtrar os produtos com base no searchTerm e filterCategory
  const filteredProdutos = produtos.filter(produto => {
    const titleMatch = produto.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filterCategory ? produto.caracter === filterCategory : true;
    return titleMatch && categoryMatch;
  });

  return (
    <div className='m-4'>
      <h1>Produtos</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProdutos.map((produto, index) => (
          <div key={`${produto.caracter}-${index}`} className="rounded-lg shadow-md p-4 border border-salmon bg-Lightsalmon">
            <img src={produto.image} alt={produto.title} className="w-full h-auto mb-4" />
            <p className="bg-salmon border border-red-900 rounded-md my-1 p-0.5 inline-block text-lg font-semibold">{produto.unidade}</p>
            <h2 className="text-xl font-semibold mb-2">{produto.title}</h2>
            <p className="text-gray-700 mb-2 text-lg">{produto.description}</p>
            <p className="text-lg font-bold text-black">{produto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
