import { CategoryCard } from './CategoryCard';

import wafflesImg from '../assets/photos/wafflelar.jpg';
import kahveler from '../assets/photos/kahveler.jpg';
import icecekler from '../assets/photos/icecekler.jpg';
import dondurmalar from '../assets/photos/dondurma.jpg';


interface HomePageProps {
  onSelectCategory: (category: string) => void;
}

export function HomePage({ onSelectCategory }: HomePageProps) {
  const categories = [
    {
      id: 'waffles',
      title: 'Waffle Çeşitleri',
      description: 'Klasik Wafflelarımız ve özel tariflerimizle hazırlanmış Wafflelar',
      imageUrl: wafflesImg
    },
    {
      id: 'dondurmalar',
      title: 'Dondurma Çeşitleri',
      description: 'Ferahlatıcı ve lezzetli dondurma seçenekleri',
      imageUrl: dondurmalar
    },
    {
      id: 'kahveler',
      title: 'Kahve Çeşitleri',
      description: 'Zengin aromalı kahve çeşitlerimiz',
      imageUrl: kahveler
    },
    {
      id: 'içecekler',
      title: 'İçecek Çeşitleri',
      description: 'Soğuk ve sıcak içecek seçenekleri',
      imageUrl: icecekler
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
          <h1 className="text-primary mb-2 sm:mb-3">Panayır Waffle</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2">
            Özenle hazırlanmış eşsiz lezzetler sunan Panayır Waffle'a hoş geldiniz. 
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 pb-safe">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-primary mb-2 sm:mb-3">Menümüz</h2>
          <p className="text-muted-foreground">
            Menümüzü keşfetmek için kategori seçin ve damak tadınıza uygun lezzetleri bulun!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
              onClick={() => onSelectCategory(category.id)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center pb-safe">
          <p className="text-muted-foreground text-sm">
            Her Gün Açığız • 12:00 - 01:00  
          </p>
        </div>
      </footer>
    </div>
  );
}
