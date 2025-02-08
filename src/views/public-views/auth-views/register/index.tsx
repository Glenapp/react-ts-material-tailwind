import { Input } from '../../components';

export const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen min-w-screen bg-light-blue-500">
        <div className="sm:w-[30rem] relative flex flex-col rounded-xl bg-white p-5 justify-center items-center">
          <h4 className="block text-xl font-medium text-gray-800">Sign Up</h4>
          <p className="text-gray-500 font-light">
            Nice to meet you! Enter your details to register.
          </p>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6  ">
              <div className="w-full max-w-sm min-w-[200px]">
                <Input type="text" placeholder="Your Name" label="Your Name" />
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <Input type="email" placeholder="Your Email" label="Email" />
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <Input
                  type="password"
                  placeholder="Your Password"
                  label="Password"
                />
              </div>
            </div>

            <div className=" my-4 ">
              <Input type="checkbox" label="Remember Me" />
            </div>
            <button
              className="mt-4 w-full rounded-md bg-gray-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Sign Up
            </button>

            <p className="flex justify-center mt-6 text-sm text-gray-600">
              Don&apos;t have an account?
              <a
                href="#signup"
                className="ml-1 text-sm font-semibold text-gray-700 underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
