import React, { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserInfoAtom, UserIdAtom } from "../../state/atoms/UserAtom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userId, setUserId] = useRecoilState(UserIdAtom);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
        setUserInfo({
          icon: "",
          uid: currentUser.uid,
          userName: "nyuta",
          email: currentUser.email,
        });
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
