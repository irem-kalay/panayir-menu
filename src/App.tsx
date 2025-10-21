import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | string>('home');

  const handleSelectCategory = (categoryId: string) => {
    setCurrentPage(categoryId);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'home') {
    return <HomePage onSelectCategory={handleSelectCategory} />;
  }

  return (
    <CategoryPage 
      categoryId={currentPage} 
      onBack={handleBackToHome}
    />
  );
}
