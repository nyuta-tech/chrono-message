import React from "react";

import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Text, Paper, Group, PaperProps, Divider } from "@mantine/core";
import { AuthForm } from "../templates/authForm";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Login = (props: PaperProps) => {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null),
    },
  });

  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    //firebaseでログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Paper className="w-1/3 mx-auto border-solid border-2 p-4 mt-10" {...props}>
      <Text className="text-center">Welcome to CHRONO-MESSAGE</Text>

      <Group grow mb="md" mt="md">
        <button onClick={signInWithGoogle}></button>
        {/* <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton> */}
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
      <AuthForm form={form} type={type} toggle={toggle} />
    </Paper>
  );
};
