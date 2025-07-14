import React from 'react';

interface AccessibleButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  ariaDescribedBy?: string;
  title?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  ariaDescribedBy,
  title,
  style,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all`}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      title={title || ariaLabel}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;
