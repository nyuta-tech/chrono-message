import React, { useEffect } from "react";

import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { Text, Paper, Group, PaperProps, Divider } from "@mantine/core";
import { PassAuth } from "../templates/auth/PassAuth";
import { GoogleAuth } from "../templates/auth/GoogleAuth";
import { useRecoilValue } from "recoil";
import { UserIdAtom } from "../../state/atoms/UserAtom";
import { useNavigate } from "react-router-dom";

export const Auth = (props: PaperProps) => {
  const [type, toggle] = useToggle(["login", "register"]);
  const userId = useRecoilValue(UserIdAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate("/user");
    }
  }, [userId, navigate]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      // email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null),
    },
  });

  return (
    <Paper className="w-1/3 mx-auto border-solid border-2 p-4 mt-10" {...props}>
      <Text className="text-center">Welcome to CHRONO-MESSAGE</Text>

      <Group grow mb="md" mt="md" className="text-center">
        <GoogleAuth />
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
      <PassAuth form={form} type={type} toggle={toggle} />
      {userId ? <div>ログイン済み</div> : <div>未ログイン</div>}
    </Paper>
  );
};
