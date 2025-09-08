import { Heart, Flower2 } from "lucide-react";

interface FloralDividerProps {
  variant?: "heart" | "flower";
  className?: string;
}

const FloralDivider = ({ variant = "flower", className = "" }: FloralDividerProps) => {
  const Icon = variant === "heart" ? Heart : Flower2;
  
  return (
    <div className={`floral-divider ${className}`}>
      <Icon className="flower-icon w-6 h-6" />
    </div>
  );
};

export default FloralDivider;