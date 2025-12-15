import { User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
  title?: string;
}

const Header = ({ showBackButton, onBack, title }: HeaderProps) => {
  return (
    <header className="jiji-header sticky top-0 z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {showBackButton ? (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
          ) : (
            <button className="lg:hidden p-2 hover:opacity-80 transition-opacity">
              <Menu size={24} />
            </button>
          )}

          {title ? (
            <h1 className="text-lg font-semibold flex-1 text-center">{title}</h1>
          ) : (
            <Link to="/" className="flex flex-col items-center flex-1">
              <h1 className="text-2xl font-bold tracking-tight">jiji</h1>
              <p className="text-xs opacity-90 tracking-wider">SELL FASTER, BUY SMARTER</p>
            </Link>
          )}

          <Link
            to="/"
            className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
          >
            <User size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
