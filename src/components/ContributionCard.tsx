import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ContributionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  emoji: string;
}

export const ContributionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  onClick, 
  emoji 
}: ContributionCardProps) => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-accent hover:border-primary hover:shadow-creative transition-all duration-300 cursor-pointer group transform hover:scale-105">
      <div onClick={onClick} className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-3xl">{emoji}</span>
          <Icon className="w-8 h-8 text-primary group-hover:text-creative-purple transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <Button 
          variant="creative-outline" 
          size="sm"
          className="mt-4 w-full"
        >
          Get Started
        </Button>
      </div>
    </Card>
  );
};