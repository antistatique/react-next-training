import React, { useEffect, useState } from 'react';

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  pokemonPerPage: number;
  children: React.ReactNode;
}

const Pagination = ({ children}: PaginationProps) => {

  const [nextPage, setNextPage] = useState('');

  console.log(nextPage)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => setNextPage(data.next));
  }, []);


  return (
    <div>
      {children}
      <button 
        type="button" 
        aria-label="previous page" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Prev
      </button>
      <p>1 - 2 - 3</p>
      <a
      href={nextPage}
        type="button" 
        aria-label="next page" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;