import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  error?: { message?: string };
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, error, children, ...rest }, ref) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <select 
          id={name} 
          name={name} 
          ref={ref} 
          {...rest} 
          className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md`}
        >
            {children}
        </select>
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
));

export default Select;