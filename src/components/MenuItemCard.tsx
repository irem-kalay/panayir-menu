import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export function MenuItemCard({ name, description, price, imageUrl }: MenuItemCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 h-[100px] sm:h-[110px]">
      <div className="flex h-full">
        {/* Image Section - 35% width */}
        <div className="relative w-[35%] overflow-hidden">
          <ImageWithFallback 
            src={imageUrl} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10"></div>
        </div>
        
        {/* Content Section - 65% width */}
        <div className="flex-1 flex flex-col justify-between p-3 sm:p-4">
          <div className="flex justify-between items-start gap-2 mb-1">
            <h4 className="text-foreground flex-1 min-w-0 line-clamp-1">{name}</h4>
            <span className="text-primary shrink-0 text-sm sm:text-base">{price}</span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
}
