'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const RandomPhotos = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // Función para obtener fotos aleatorias
  const fetchRandomPhotos = async () => {
    setLoading(true);
    const response = await fetch(`https://picsum.photos/v2/list?page=${randomInt(100)}&limit=10`);
    setLoading(false);
    const data = await response.json();
    const photoUrls = data.map((photo: { download_url: string }) => photo.download_url);
    setPhotos(photoUrls);
  };

  const randomInt = (max: number)=>{
    return Math.floor( Math.random() * max);
  }

  useEffect(() => {
    fetchRandomPhotos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-center mb-4">Fotos Aleatorias</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image src={photo} width={200} height={200} alt={`Random ${index}`} className="w-[200px] h-[200px] object-cover rounded-lg" unoptimized/>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={fetchRandomPhotos}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition inline-flex items-center"
        >
          
            {
                loading  && (<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )
            }
            Cargar Nuevas Fotos
        </button>
      </div>
    </div>
  );
};

export default RandomPhotos;