import React, { useCallback, useEffect } from "react";
import { userAtom } from "../../state/atoms/UserAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const auth = getAuth();

  const onClickLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth");
      })
      .catch((error) => {
        // An error happened.
      });
    setUser(null);
  }, []);
  return (
    <div>
      <p>{user?.email}</p>
      <button onClick={onClickLogout}>ログアウト</button>
    </div>
  );
};
