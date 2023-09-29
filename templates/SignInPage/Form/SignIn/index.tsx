import { useState } from "react";
import Field from "@/components/Field";

type SignInProps = {
  onClick?: () => void;
};

const SignIn = ({ onClick }: SignInProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <form action="" onSubmit={() => console.log("Submit")}>
      <Field
        className="mb-4"
        classInput="dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent"
        placeholder="Email"
        icon="email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        required
      />

      <button className="btn-blue btn-large w-full" type="submit">
        Sign in with Amplify
      </button>
    </form>
  );
};

export default SignIn;
