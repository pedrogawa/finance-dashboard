/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MdEmail } from "react-icons/md";

interface InputProps {
  name: string;
  label: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function FormInput({ name, label, change, error }: InputProps) {
  return (
    <div className="flex gap-1 flex-col items-start w-full">
      <label htmlFor={name} className="text-black font-semibold">
        {label}
      </label>
      <div className="flex p-2 items-center gap-2 border-2 border-grey rounded-md w-full">
        <MdEmail color="#3b82f680" size={22} />
        <input
          type="text"
          name={name}
          onChange={change}
          placeholder={`Enter ${label}`}
          className="text-grey focus:outline-none w-full"
        />
      </div>
      <div>
        {error && (
          <p className="text-red-500 mt-2 text-sm font-bold">{error}</p>
        )}
      </div>
    </div>
  );
}
