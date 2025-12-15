import { Search, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { tanzanianRegions } from "@/data/products";

interface SearchBarProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = ({
  selectedRegion,
  onRegionChange,
  searchQuery,
  onSearchChange,
}: SearchBarProps) => {
  return (
    <div className="bg-card shadow-sm border-b border-border">
      <div className="container py-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-shrink-0 sm:w-48">
            <Select value={selectedRegion} onValueChange={onRegionChange}>
              <SelectTrigger className="w-full bg-background">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <SelectValue placeholder="All Tanzania" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="all">All Tanzania</SelectItem>
                {tanzanianRegions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Search electronics..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
