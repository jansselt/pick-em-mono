import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface SidebarIconButtonProps {
  src?: string;
  fallback: string;
  label: string;
  isExpanded?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

export const SidebarIconButton = ({
  src,
  fallback,
  label,
  isExpanded = false,
  onClick,
  isActive = false,
}: SidebarIconButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        'relative w-full p-2 flex items-center gap-4 transition-all duration-200',
        isExpanded ? 'justify-start' : 'justify-center',
        isActive
          ? 'bg-primary/10 text-primary hover:bg-primary/20'
          : 'hover:bg-accent',
      )}
      onClick={onClick}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
      )}

      <Avatar
        className={cn(
          'shrink-0 transition-all duration-200',
          isExpanded ? 'h-10 w-10' : 'h-12 w-12',
        )}
      >
        <AvatarImage src={src} alt={label} />
        <AvatarFallback
          className={cn('text-lg font-semibold', isActive && 'text-primary')}
        >
          {fallback}
        </AvatarFallback>
      </Avatar>

      {isExpanded && (
        <span
          className={cn(
            'text-sm font-medium',
            isActive && 'text-primary font-semibold',
          )}
        >
          {label}
        </span>
      )}
    </Button>
  );
};
