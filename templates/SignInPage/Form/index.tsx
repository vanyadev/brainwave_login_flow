import { Tab } from "@headlessui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Logo from "@/components/Logo";
import SubmitCode from "./SubmitCode";
import SignIn from "./SignIn";
import { useState } from "react";
import { useGlobalContext } from "context";

type FormProps = {};

const Form = ({}: FormProps) => {
  const { email, setEmail } = useGlobalContext();
  const { colorMode } = useColorMode();
  const [step, setStep] = useState(0);
  const isLightMode = colorMode === "light";

  const handleChangeStep = () => {
    setStep(1);
  };

  return (
    <div className="w-full max-w-[31.5rem] m-auto">
      <Logo className="max-w-[11.875rem] mx-auto mb-8" dark={isLightMode} />

      {step === 0 ? (
        <SignIn onClick={handleChangeStep} email={email} setEmail={setEmail} />
      ) : (
        <SubmitCode email={email} />
      )}
    </div>
  );
};

export default Form;
