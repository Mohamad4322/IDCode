import React from 'react';

interface AccessibleInputProps {
  id: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaDescribedBy?: string;
  autoComplete?: string;
  style?: React.CSSProperties;
}

interface AccessibleLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

interface AccessibleSelectProps {
  id: string;
  name: string;
  value?: string;
  required?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  ariaDescribedBy?: string;
  style?: React.CSSProperties;
}

interface AccessibleTextareaProps {
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  ariaDescribedBy?: string;
  style?: React.CSSProperties;
}

interface AccessibleCheckboxProps {
  id: string;
  name: string;
  checked?: boolean;
  required?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaDescribedBy?: string;
  style?: React.CSSProperties;
}

export const AccessibleLabel: React.FC<AccessibleLabelProps> = ({
  htmlFor,
  children,
  className = '',
  required = false,
  style,
  ...props
}) => {
  return (
    <label 
      htmlFor={htmlFor} 
      className={`block text-sm font-medium text-gray-700 mb-2 ${className}`}
      style={style}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
    </label>
  );
};

export const AccessibleInput: React.FC<AccessibleInputProps> = ({
  id,
  name,
  type = 'text',
  value,
  placeholder,
  required = false,
  className = '',
  onChange,
  ariaDescribedBy,
  autoComplete,
  ...props
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      className={`${className} focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
      onChange={onChange}
      aria-describedby={ariaDescribedBy}
      aria-required={required}
      autoComplete={autoComplete}
      {...props}
    />
  );
};

export const AccessibleSelect: React.FC<AccessibleSelectProps> = ({
  id,
  name,
  value,
  required = false,
  className = '',
  onChange,
  children,
  ariaDescribedBy,
  ...props
}) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      required={required}
      className={`${className} focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
      onChange={onChange}
      aria-describedby={ariaDescribedBy}
      aria-required={required}
      {...props}
    >
      {children}
    </select>
  );
};

export const AccessibleTextarea: React.FC<AccessibleTextareaProps> = ({
  id,
  name,
  value,
  placeholder,
  required = false,
  className = '',
  rows = 4,
  onChange,
  ariaDescribedBy,
  ...props
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`${className} focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
      onChange={onChange}
      aria-describedby={ariaDescribedBy}
      aria-required={required}
      {...props}
    />
  );
};

export const AccessibleCheckbox: React.FC<AccessibleCheckboxProps> = ({
  id,
  name,
  checked,
  required = false,
  className = '',
  onChange,
  ariaDescribedBy,
  ...props
}) => {
  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      required={required}
      className={`${className} focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all`}
      onChange={onChange}
      aria-describedby={ariaDescribedBy}
      aria-required={required}
      {...props}
    />
  );
};
