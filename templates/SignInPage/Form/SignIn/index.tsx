import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Field from "@/components/Field";
import { Tab } from "@headlessui/react";
import SpinLoader from "@/components/SpinLoader";
import { useGlobalContext } from "context";

type SignInProps = {
  onClick: () => void;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const SignIn = ({ onClick, email, setEmail }: SignInProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setCorrectSubmitCode } = useGlobalContext();

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/request-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.status === 200) {
        const data = await res.json();
        setError(null);
        setCorrectSubmitCode(data.code);
        onClick();
      } else {
        setError("Verification error");
      }
    } catch (err) {
      setError("Verification request error");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Field
        className="mb-4"
        classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
        placeholder="Email"
        icon="email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        required
      />

      <button
        className="btn-blue btn-large w-full flex gap-2"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <SpinLoader />}
        Sign in with Amplify
      </button>
      {error && (
        <div className="mt-1 w-full flex justify-center items-center">
          {error}
        </div>
      )}
    </form>
  );
};

export default SignIn;
