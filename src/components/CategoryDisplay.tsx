import { Smartphone, Laptop, Tv, Headphones, Camera, Gamepad2, Tablet, Watch, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Camera,
  Gamepad2,
  Tablet,
  Watch,
};

const categories = [
  { id: "all", name: "All", icon: "Smartphone" },
  { id: "mobile-phones", name: "Phones", icon: "Smartphone" },
  { id: "laptops", name: "Laptops", icon: "Laptop" },
  { id: "tvs", name: "TVs", icon: "Tv" },
  { id: "audio", name: "Audio", icon: "Headphones" },
  { id: "cameras", name: "Cameras", icon: "Camera" },
  { id: "gaming", name: "Gaming", icon: "Gamepad2" },
  { id: "tablets", name: "Tablets", icon: "Tablet" },
  { id: "accessories", name: "Accessories", icon: "Watch" },
];

const CategoryDisplay = () => {
  return (
    <div className="bg-card border-b border-border">
      <div className="container py-3">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className="flex flex-col items-center gap-1 min-w-[60px] cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-primary" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDisplay;
