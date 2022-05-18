import React, { useState } from 'react';

export interface AppContextValue {
  photo: string | undefined;
  setPhoto: React.Dispatch<React.SetStateAction<string | undefined>>;
  selfie: string | undefined;
  setSelfie: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const AppContext = React.createContext<AppContextValue>({
  photo: undefined,
  setPhoto: () => undefined,
  selfie:undefined,
  setSelfie: () => undefined,
})

export const useApp = () => {
  const [photo, setPhoto] = useState<string | undefined>(undefined);
  const [selfie, setSelfie] = useState<string | undefined>(undefined);
  return {
    photo,
    setPhoto,
    selfie,
    setSelfie
  };
};

export const useAppContext = () => React.useContext(AppContext)