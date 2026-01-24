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
        <span className="font-light tracking-[0.3em] uppercase">K</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <span className="font-light tracking-[0.3em] uppercase">KGROUP</span>
    </div>
  );
};