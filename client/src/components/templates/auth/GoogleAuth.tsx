import React, { useCallback } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { GoogleButton } from "../../parts/GoogleIcon";

export const GoogleAuth = () => {
  const signInWithGoogle = useCallback(() => {
    //login using firebase
    signInWithPopup(auth, provider).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div onClick={signInWithGoogle}>
      <GoogleButton>Google</GoogleButton>
    </div>
  );
};
