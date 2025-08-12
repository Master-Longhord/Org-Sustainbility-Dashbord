import React from 'react';

// Define the properties the Input component will accept
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: { message?: string };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, ...rest }, ref) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input 
          id={name} 
          name={name} 
          ref={ref} 
          {...rest} 
          className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`} 
        />
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
));

// A separate component for passwords to reuse the same style
const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <Input {...props} type="password" ref={ref} />
);

export { Input, PasswordInput };
