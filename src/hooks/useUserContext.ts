import { useState } from 'react';

interface UserContextValue {
  userId: string;
  setId: (userId: string) => void;
}

const useUserContext = (init = ''): UserContextValue => {
  const [userId, setUserId] = useState<string>(init);

  const setId = (id: string): void => setUserId(id);

  return {
    userId,
    setId,
  };
};

export default useUserContext;
