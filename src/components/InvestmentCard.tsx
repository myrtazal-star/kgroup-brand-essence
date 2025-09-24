import { TrendingUp, MapPin, Calendar, ArrowUpRight } from "lucide-react";

interface InvestmentCardProps {
  id: string;
  title: string;
  location: string;
  investment: string;
  roi: string;
  timeline: string;
  area: string;
  imageUrl: string;
  status: 'available' | 'developing' | 'sold';
}

export const InvestmentCard = ({ 
  title, 
  location, 
  investment, 
  roi, 
  timeline, 
  area,
  imageUrl,
  status
}: InvestmentCardProps) => {
  const statusText = {
    available: 'Disponible',
    developing: 'En Desarrollo', 
    sold: 'Vendido'
  };

  const statusColor = {
    available: 'text-primary border-primary',
    developing: 'text-muted-foreground border-muted-foreground',
    sold: 'text-destructive border-destructive'
  };

  return (
    <div className="group cursor-pointer hover-elegant">
      <div className="relative overflow-hidden border border-border bg-card">
        {/* Investment Image */}
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute top-6 left-6 px-4 py-2 text-caption font-medium tracking-wide border ${statusColor[status]} bg-background/90 backdrop-blur-sm`}>
            {statusText[status]}
          </div>
          <div className="absolute top-6 right-6 w-8 h-8 bg-background/90 backdrop-blur-sm flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Investment Details */}
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <div className="text-caption text-muted-foreground uppercase tracking-wide">
              Inversión en Terreno
            </div>
            <h3 className="text-heading font-serif group-hover:text-muted-foreground transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-caption">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>

          <div className="divider-elegant h-4"></div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-caption text-muted-foreground">Inversión desde</span>
              <span className="text-subheading font-serif text-primary">{investment}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-caption">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-muted-foreground" />
                <div>
                  <div className="text-muted-foreground">ROI Proyectado</div>
                  <div className="font-medium">{roi}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <div>
                  <div className="text-muted-foreground">Desarrollo</div>
                  <div className="font-medium">{timeline}</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-2 text-muted-foreground text-caption">
                <span>Superficie: {area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};