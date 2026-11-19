import Card from '@/Components/Card';

const CardsGrid = ({ items, title }) => {

  return (
    <section id='menu' className='px-[50px] py-20'>
      <h2 className='mb-10 text-center text-[2.5rem] font-bold'>{title}</h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]'>
        {items.map(({id, name, rating, image, cuisine, tags}, index) =>
         <Card key={index} name={name} rating={rating} image={image} cuisine={cuisine} tags={tags} id={id} />
        )}
      </div>
    </section>
  );
};

export default CardsGrid;
