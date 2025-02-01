import { forwardRef, useId, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  className?: string;
  ariaInvalid?: boolean;
  ariaDescribedby?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      className = '',
      ariaInvalid,
      ariaDescribedby,
      ...props
    },
    ref,
  ) => {
    const id = useId();

    const renderInput = () => {
      switch (type) {
        case 'checkbox':
          return (
            <div className="flex">
              <label
                className="flex items-center cursor-pointer relative"
                htmlFor={id}
              >
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-gray-300 checked:bg-gray-800 checked:border-gray-800"
                  id={id}
                  ref={ref}
                  {...props}
                />
              </label>
              <label
                className="cursor-pointer ml-2 text-gray-600 text-sm"
                htmlFor={id}
              >
                {label}
              </label>
            </div>
          );
        case 'radio':
          return (
            <div className="flex">
              <label
                className="flex items-center cursor-pointer relative"
                htmlFor={id}
              >
                <input
                  type="checkbox"
                  className="peer h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-gray-300 checked:bg-gray-800 checked:border-gray-800"
                  id={id}
                  ref={ref}
                  {...props}
                />
              </label>
              <label
                className="cursor-pointer ml-2 text-gray-600 text-sm"
                htmlFor={id}
              >
                {label}
              </label>
            </div>
          );
        default:
          return (
            <>
              {label && (
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor={id}
                >
                  {label}
                </label>
              )}
              <input
                type={type}
                className={`
                  w-full bg-transparent text-sm 
                  border rounded-md px-3 py-2 
                  transition duration-300 ease 
                  focus:outline-none shadow-sm focus:shadow 
                  ${
                    ariaInvalid === true
                      ? 'placeholder:text-red-400 text-red-700 border-red-200 focus:border-red-500 hover:border-red-300'
                      : ariaInvalid === false
                        ? 'placeholder:text-green-400 text-green-700 border-green-200 focus:border-green-500 hover:border-green-300'
                        : 'placeholder:text-gray-400 text-gray-700 border-gray-200 focus:border-gray-400 hover:border-gray-300'
                  } 
                  ${className}
                `}
                ref={ref}
                aria-invalid={
                  ariaInvalid === true
                    ? 'true'
                    : ariaInvalid === false
                      ? 'false'
                      : undefined
                }
                {...props}
                id={id}
              />
              {ariaDescribedby && (
                <>
                  <p role="alert" className="text-red-700 text-sm mt-1 ml-1">
                    {ariaDescribedby}
                  </p>
                </>
              )}
            </>
          );
      }
    };

    return <div className="w-full">{renderInput()}</div>;
  },
);

export default Input;
