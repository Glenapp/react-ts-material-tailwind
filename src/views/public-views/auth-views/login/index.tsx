import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/index';
import { useState } from 'react';
import authService from '../../../../services/authService';
import { LoginRequest } from '../../../../models/service.model';

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: 'demouser@mailinator.com',
      password: 'abc@123',
      rememberMe: false, // Empty string for an initially empty field
    },
  });
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const inputData: LoginRequest = {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      };
      const response = await authService.login(inputData);
      console.log('Login successful:', response);
      alert('Login successfully'!);
      // localStorage.setItem('authToken', response?.token); // Save token after successful login
      // You can redirect the user or perform further actions
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen min-w-screen bg-light-blue-500">
        <div className="sm:w-[30rem] relative flex flex-col rounded-xl bg-white p-5 justify-center items-center">
          <h4 className="block text-xl font-medium text-gray-800">Sign In</h4>
          <p className="text-gray-500 font-light">
            Nice to meet you! Enter your details to login.
          </p>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-1 flex flex-col gap-6  ">
              <div className="w-full max-w-sm min-w-[200px]">
                <Input
                  type="text"
                  placeholder="Your Email"
                  label="Email"
                  {...register('email', {
                    required: 'Email Address is required.',
                    validate: {
                      matchPatern: value =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value,
                        ) || 'Email address must be a valid address.',
                    },
                  })}
                  ariaInvalid={errors.email ? true : undefined}
                  ariaDescribedby={
                    errors.email ? errors.email?.message : undefined
                  }
                />
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <Input
                  type="password"
                  placeholder="Your Password"
                  label="Password"
                  {...register('password', {
                    required: 'Password is required.',
                  })}
                  ariaInvalid={errors.password ? true : undefined}
                  ariaDescribedby={
                    errors.password ? errors.password?.message : undefined
                  }
                />
              </div>
            </div>

            <div className=" my-4 ">
              <Input
                type="checkbox"
                label="Remember Me"
                {...register('rememberMe', {})}
              />
            </div>
            <button
              className="mt-4 w-full rounded-md bg-gray-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Login
            </button>

            <p className="flex justify-center mt-6 text-sm text-gray-600">
              Don&apos;t have an account?
              <a
                href="#signup"
                className="ml-1 text-sm font-semibold text-gray-700 underline"
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
