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
      <div className="inline-flex items-center justify-center w-10 h-10 bg-foreground">
        <span className="text-background font-bold text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>K</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-semibold tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1em' }}>KGROUP</span>
        <span className="text-[0.42em] text-muted-foreground uppercase tracking-[0.15em] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Bienes Raíces</span>
      </div>
    </div>
  );
};