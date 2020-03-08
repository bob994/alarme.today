import { createContext } from 'react';

interface ContextProps {
  userId: string;
  setId: (id: string) => void;
}

export const GlobalContext = createContext<ContextProps>({
  userId: '',
  setId: () => {},
});

export const GlobalContextProvider = GlobalContext.Provider;

export const GlobalContextConsumer = GlobalContext.Consumer;
