// /context/UserContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { IUser } from '../interfaces/IUser';

interface UserContextProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
