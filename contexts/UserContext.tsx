// UserContext.tsx
import React from 'react';
import { IUser } from '../interfaces/IUser';

export const UserContext = React.createContext<IUser | undefined>(undefined);
