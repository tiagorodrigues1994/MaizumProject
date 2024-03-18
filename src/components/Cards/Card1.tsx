import React from 'react';
import { Produto } from '../../data/Data';
import getProdutos from '../../data/Data';

interface Card1Props {
  searchTerm: string;
  filterCategory: string | null;
}

const Card1: React.FC<Card1Props> = ({ searchTerm, filterCategory }) => {
  const produtos: Produto[] = getProdutos();

  // Filtrar os produtos com base no searchTerm e filterCategory
  const filteredProdutos = produtos.filter(produto => 
    (filterCategory ? produto.caracter === filterCategory : true) &&
    produto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='m-4'>
      <h1>Produtos</h1>
      <div >
        {filteredProdutos.map((produto, index) => (
          <div key={`${produto.caracter}-${index}`} className="my-5">
            <div className="rounded-lg shadow-md p-4 border border-salmon bg-Lightsalmon flex justify-between flex-col sm:flex-row items-center  ">
                <div className="flex  items-center flex-col sm:flex-row  ">
                <div className="flex items-center justify-center ">
                  <img   src={produto.image} alt={produto.title} className=" w-90 h-[7rem] rounded" />
                </div>
                <div className="ml-3  ">
                  <h2 className="text-xl font-semibold mb-2">{produto.title}</h2>
                  <p className="text-gray-700 mb-2 text-lg">{produto.description}</p>
                  <p className="bg-salmon border border-red-900 rounded-md mb-3  p-0.5 inline-block text-lg font-semibold">{produto.unidade}</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-black">{produto.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
