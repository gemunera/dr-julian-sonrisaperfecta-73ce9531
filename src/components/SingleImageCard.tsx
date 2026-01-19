import { Card, CardContent } from "@/components/ui/card";

interface SingleImageCardProps {
  image: string;
  title: string;
  description: string;
}

const SingleImageCard = ({ image, title, description }: SingleImageCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
            draggable={false} 
          />
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleImageCard;
