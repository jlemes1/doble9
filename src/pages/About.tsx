export const About = () => {
  return (
    <div className='space-y-5'>
      <h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
        Quiénes somos
      </h1>

      <img
        src='https://media.revistagq.com/photos/690dbe28941051e95be6faf8/3:2/w_1620,h_1080,c_limit/equipaciones-adidas.jpg'
        alt='Imagen de fondo'
        className='h-125 w-full object-cover'
      />

      <div className='flex flex-col gap-4 tracking-tighter leading-7 text-md font-medium text-slate-800'>
        <p>
          DOBLE9 es una tienda en línea que se dedica a la venta de camisetas de
          futbol. Nuestro catálogo cuenta con una amplia variedad de camisetas
          de clubes argentinos, internacionales y de selecciones nacionales.
        </p>

        <p>
          Para más información, no dudes en ponerte en contacto con nosotros
          llamando al <a href='tel:+541111111111'>+54 1111-111111</a>.
        </p>
      </div>
    </div>
  );
};
