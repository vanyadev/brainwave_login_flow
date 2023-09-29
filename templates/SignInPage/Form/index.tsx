import { Tab } from "@headlessui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Logo from "@/components/Logo";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

type FormProps = {};

const Form = ({}: FormProps) => {
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  return (
    <div className="w-full max-w-[31.5rem] m-auto">
      <Logo className="max-w-[11.875rem] mx-auto mb-8" dark={isLightMode} />
      <Tab.Group defaultIndex={0}>
        <Tab.Panels>
          <Tab.Panel>
            <SignIn />
          </Tab.Panel>
          <Tab.Panel>
            <CreateAccount />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Form;
