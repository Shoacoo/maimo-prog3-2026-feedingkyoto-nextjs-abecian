'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const RecipeContainer = ({ id }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);

  const handleGetRecipe = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.log('Hubo un error', error);
      setError(true);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);

  if (error) return <div className='p-40 text-center'>Hubo un error</div>;
  if (!recipe) return <div className='p-40 text-center'>LOADING....</div>;

  return (
    <div>
      <section className='relative h-[60vh]'>
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          priority
          className='object-cover brightness-[40%]'
        />

        <div className='absolute inset-0 bg-black/40'></div>

        <Link href='/' className='absolute left-5 top-[130px] z-10 text-[#f5e6d3]'>
          ← Volver
        </Link>

        <div className='absolute bottom-10 left-10'>
          <h1 className='text-5xl font-bold'>{recipe.name}</h1>
          <p className='opacity-80'>Cocina {recipe.cuisine} · Dificultad {recipe.difficulty} · {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p>
        </div>
      </section>

      <main className='px-10 py-[60px]'>
        <div className='mx-auto flex max-w-[1000px] gap-[60px] max-md:flex-col'>
          <div className='flex-1'>
            <h2 className='mb-5 text-2xl font-bold'>Ingredientes</h2>
            <ul>
              {recipe.ingredients.map((ingredient) =>
                <li key={ingredient} className='mb-2.5'>{ingredient}</li>
              )}
            </ul>
          </div>

          <div className='flex-1'>
            <h2 className='mb-5 text-2xl font-bold'>Preparación</h2>
            <ol className='list-decimal pl-5'>
              {recipe.instructions.map((step) =>
                <li key={step} className='mb-[15px]'>{step}</li>
              )}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeContainer;
