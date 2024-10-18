'use client';
import { BooksResult } from "@/models/Book";
import Image from "next/image";
import { useState } from "react";
import ResponsivePagination from 'react-responsive-pagination';
export default function Home() {
  const [ search, setSearch] = useState<string>();
  const [ books, setBooks] = useState<BooksResult>();
  const [ currentPage, setCurrentPage ] = useState(1);
  const [total, setTotal]=useState<number>(0);
  const [ loading, setLoading ]= useState<boolean>(false);
  const fetchBooks = (page : number)=>{
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB1i_c0loqsTQX25dufz5qUaTI5VARU99A&startIndex=${page}&maxResults=10`).then(async(result)=>{
      if(result.ok){
        const booksJson : BooksResult = await result.json();
        setBooks(booksJson);        
        setTotal(Math.ceil(booksJson.totalItems/10))
      }
      
    }).finally(()=>{
      setLoading(false);
    });
  }
  const handleSearch = () => {
    setCurrentPage(1);
    fetchBooks(1);
    
  }
  
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" items-center sm:items-start">
          <h1 className="text-4xl">Google Books</h1>
          <input className="my-4 px-3 py-2 text-slate-600 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" onChange={(e)=>setSearch(e.target.value)}/> 
          <button onClick={()=>handleSearch()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Buscar</button>
          <div className="grid grid-cols-5 gap-4 my-5">
            {
              !loading && books?.items?.map((book)=>(
                <div key={book.id} className="text-center justify-center items-center bg-slate-500 rounded-md p-4">                  
                  {  <Image className="rounded-md inline" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail: `https://placehold.co/150x220?text=${book.volumeInfo.title}`} width={150} height={200} alt="" unoptimized/>}
                  <h1 className="text-1xl my-2">{book.volumeInfo.title}</h1>
                  <p className="truncate text-gray-700">{book.volumeInfo.description}</p>
                </div>
              ))
            }
            {
              loading && Array.from({length:10}).map((_, index)=>(
                <div key={index} className="text-center justify-center items-center bg-gray-300 rounded-md p-4 animate-pulse">
                  <div className="bg-gray-200 rounded-md h-56 w-40 mx-auto" />
                  <div className="h-4 bg-gray-200 rounded my-2 w-3/4 mx-auto" /> 
                  <div className="h-4 bg-gray-200 rounded w-full mx-auto" /> 
                </div>
              ))
            }
          </div>
          {
            books && (
              <ResponsivePagination
                className="flex space-x-2 "
                current={currentPage}
                total={total}
                onPageChange={(value)=>{
                  setCurrentPage(value);
                  fetchBooks(value ===1 ? value : value+10);
                }}
                activeItemClassName="bg-blue-500 text-white border-blue-500 rounded-full item-center  px-3 py-1 rounded border transition-colors duration-200"
                previousClassName="px-3 py-1 rounded border text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                nextClassName="px-3 py-1 rounded border text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                pageItemClassName="px-3 py-1 rounded-full border transition-colors duration-200"
                disabledItemClassName="opacity-50 cursor-not-allowed"
              />
            )
          }          
          
        </main>
    </div>
  );
}
