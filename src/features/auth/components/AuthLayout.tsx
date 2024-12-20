import { FC } from "react";
import { ToastContainer } from "react-toastify";

interface IAuthLayout {
  title: string;
  outline: string
  children: React.ReactNode
}

const AuthLayout: FC<IAuthLayout> = ({ title, outline, children }) => {
  return (
    <>
      <div className="relative flex items-center justify-center mt-10">
        <div className="space-y-6 max-w-[400px]">
          <div className="space-y-2 block text-left">
            <h1 className="text-[24px] leading-[32px] text-black font-bold">{title}</h1>
            <h2 className="text-[16px] leading-[24px] text-black font-normal">{outline}</h2>
          </div>
          {children}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AuthLayout;