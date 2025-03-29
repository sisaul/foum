import NextLink from 'next/link';
import { cn } from '../../lib/utils';
import { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  variant?: 'default' | 'ghost' | 'underline';
  children: React.ReactNode;
}

export function Link({
  href,
  className,
  variant = 'default',
  children,
  ...props
}: LinkProps) {
  const baseStyles = 'inline-flex items-center transition-colors';
  
  const variantStyles = {
    default: 'text-primary hover:text-primary/80',
    ghost: 'text-muted-foreground hover:text-foreground',
    underline: 'underline-offset-4 hover:underline text-foreground'
  };
  
  return (
    <NextLink
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  );
} 