import React, { useEffect } from "react";

import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Text, Paper, Group, PaperProps, Divider } from "@mantine/core";
import { PassAuth } from "../templates/auth/PassAuth";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { GoogleAuth } from "../templates/auth/GoogleAuth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "../../state/atoms/UserAtom";

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

  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup function to unsubscribe the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [setUser]);

  return (
    <Paper className="w-1/3 mx-auto border-solid border-2 p-4 mt-10" {...props}>
      <Text className="text-center">Welcome to CHRONO-MESSAGE</Text>

      <Group grow mb="md" mt="md" className="text-center">
        <GoogleAuth />
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
      <PassAuth form={form} type={type} toggle={toggle} />

      {auth.currentUser ? <div>{auth.currentUser.email}</div> : <div>Already Logined</div>}
    </Paper>
  );
};
