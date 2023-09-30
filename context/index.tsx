import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type GlobalContextType = {
  email: string;
  userName: string;
  handleSetUserName: (name: string) => void;
  setEmail: Dispatch<SetStateAction<string>>;
};

export type GlobalContextProviderProps = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const handleSetUserName = (name: string) => {
    setUserName(name);
  };

  const value: GlobalContextType = {
    email,
    userName,
    setEmail,
    handleSetUserName,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const value = useContext(GlobalContext);

  return {
    ...value,
  };
};
