import React from "react";

import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Text, Paper, Group, PaperProps, Divider } from "@mantine/core";
import { AuthForm } from "../templates/authForm";
// import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";

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

  return (
    <Paper className="w-1/3 mx-auto border-solid border-2 p-4 mt-10" {...props}>
      <Text className="text-center">Welcome to CHRONO-MESSAGE</Text>

      <Group grow mb="md" mt="md">
        {/* <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton> */}
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
      <AuthForm form={form} type={type} toggle={toggle} />
    </Paper>
  );
};
