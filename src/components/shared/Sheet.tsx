import { useEffect, useRef } from 'react';
import { useGlobalStore } from '../../store/global';
import { Search } from './Search';
import { Cart } from './Cart';

export const Sheet = () => {
  const sheetContent = useGlobalStore((state) => state.sheetContent);
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const sheetRef = useRef<HTMLDivElement | null>(null);

  // Oculta scroll y cierra el sheet al hacer click fuera de el
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        closeSheet();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeSheet]);

  const showContent = () => {
    switch (sheetContent) {
      case 'cart':
        return <Cart />;
      case 'search':
        return <Search />;
      default:
        return null;
    }
  };

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex justify-end animate-fade-in'>
      <div
        className='bg-white text-black h-screen w-125 shadow-lg animate-slide-in'
        ref={sheetRef}
      >
        {showContent()}
      </div>
    </div>
  );
};
