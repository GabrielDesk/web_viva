import React, {
  ChildContextProvider,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { ELanguage } from "@/utils/enum/ELanguages";

interface ContextProps {
  themeLanguage: ELanguage;
  setThemeLanguage: React.Dispatch<React.SetStateAction<ELanguage>>;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextWeb = createContext<ContextProps | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [themeLanguage, setThemeLanguage] = useState<ELanguage>(
    ELanguage.english
  );

  return (
    <ContextWeb.Provider
      value={{
        //language context
        themeLanguage,
        setThemeLanguage,
      }}
    >
      {children}
    </ContextWeb.Provider>
  );
};

// export const useThemeLanguage = (): ContextProps => {
//   const context = useContext(ContextWeb);
//   if (!context) {
//     throw new Error(
//       "useThemeLanguage must be used within a ThemeLanguageProvider"
//     );
//   }
//   return context;
// };
