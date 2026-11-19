'use client';

import { useState, useEffect } from 'react';
import CardsGrid from '@/Components/CardsGrid';
import axios from 'axios';
import Hero from '@/Components/Hero';

const HomeContainer = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleGetItems = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0');
      const data = response.data.recipes;
      console.log(data);
      setItems(data);
      setFilteredItems(data)
      setLoading(false);
    } catch (error) {
      console.log('Hubo un error', error);
      setError(true);
      setErrorMsg('Hubo un error');
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  const handleSetFilter = (category) => {
    setFilteredItems(items.filter(item => item.cuisine === category))
  }

  return (
    <div>
      <section>
       <Hero/>
        {!loading && <CardsGrid items={items} title='Recetas recomendadas' />}
        {loading && <div>LOADING....</div>}

        {error && <div>{errorMsg}</div>}
      </section>
    </div>
  );
};

export default HomeContainer;