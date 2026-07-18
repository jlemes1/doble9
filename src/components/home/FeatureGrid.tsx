import { CreditCard, RefreshCcw, ShieldCheck, Truck } from 'lucide-react';

export const FeatureGrid = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6 font-bold tracking-tighter uppercase  '>
      <div className='flex items-center gap-6 border border-slate-300 shadow-xs rounded-md p-4'>
        <Truck />
        <p>Envíos a todo el país</p>
      </div>
      <div className='flex items-center gap-6 border border-slate-300 shadow-xs rounded-md p-4'>
        <CreditCard />
        <p>3 cuotas sin interés</p>
      </div>
      <div className='flex items-center gap-6 border border-slate-300 shadow-xs rounded-md p-4'>
        <ShieldCheck />
        <p>Tu compra 100% segura</p>
      </div>
      <div className='flex items-center gap-6 border border-slate-300 shadow-xs rounded-md p-4'>
        <RefreshCcw />
        <p>Podes cambiarlo o devolverlo</p>
      </div>
    </div>
  );
};
