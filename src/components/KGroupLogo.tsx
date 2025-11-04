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
    <div className={`monogram ${sizeClasses[size]} flex items-center gap-3 ${className}`}>
      <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-accent">
        <span className="text-accent font-bold">K</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-bold tracking-tight">KGROUP</span>
        <span className="text-[0.5em] text-muted-foreground uppercase tracking-widest">Real Estate Comercial</span>
      </div>
    </div>
  );
};