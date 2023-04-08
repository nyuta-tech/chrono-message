import React, { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../state/atoms/UserAtom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useRecoilState(userAtom);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
      setLoading(true);
    });

    // Cleanup function to unsubscribe the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>{children}</div>;
  } else {
    return <div>Loading Now</div>;
  }
};
