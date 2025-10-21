import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export function CategoryCard({ title, description, imageUrl, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 text-left w-full h-[140px] sm:h-[160px]"
    >
      <div className="flex h-full">
        {/* Image Section - 40% width */}
        <div className="relative w-[40%] overflow-hidden">
          <ImageWithFallback 
            src={imageUrl} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20"></div>
        </div>
        
        {/* Content Section - 60% width */}
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-5">
          <div>
            <h3 className="text-primary mb-1 sm:mb-1.5 line-clamp-1">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>
          
          <div className="flex items-center gap-2 text-primary text-sm mt-2">
            <span className="group-hover:underline">Menüyü Göster</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </button>
  );
}
