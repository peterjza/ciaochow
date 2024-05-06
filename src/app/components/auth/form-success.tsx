import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="p-3 rounded-md flex flex-col items-center gap-x-2 text-sm text-emerald-500 text-center">
      <p className="mb-2 flex ">
        <FaRegCheckCircle className="text-emerald-500 text-xl" />
        Congradulations {message} your account has been created
      </p>
      <p>
        Please <Link href="/login">Login</Link> here
      </p>
    </div>
  );
};
