interface KGroupLogoProps {
  variant?: 'full' | 'monogram';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const KGroupLogo = ({ variant = 'full', size = 'md', className = '' }: KGroupLogoProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl', 
    lg: 'text-4xl'
  };

  if (variant === 'monogram') {
    return (
      <div className={`monogram ${sizeClasses[size]} ${className}`}>
        <span className="inline-flex items-center justify-center w-10 h-10 border border-foreground">
          KG
        </span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center gap-3 ${className}`}>
      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-foreground to-accent relative overflow-hidden group">
        <span className="text-background font-bold text-lg relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>K</span>
        <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1em' }}>KGROUP</span>
        <span className="text-[0.42em] text-muted-foreground uppercase tracking-[0.2em] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Bienes Raíces</span>
      </div>
    </div>
  );
};