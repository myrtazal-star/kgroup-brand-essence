interface KGroupLogoProps {
  variant?: 'full' | 'monogram';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const KGroupLogo = ({ variant = 'full', size = 'md', className = '' }: KGroupLogoProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base', 
    lg: 'text-xl'
  };

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <span className="tracking-[0.3em] uppercase text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>K</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <span className="tracking-[0.3em] uppercase text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: '0.35em' }}>KGROUP</span>
    </div>
  );
};
