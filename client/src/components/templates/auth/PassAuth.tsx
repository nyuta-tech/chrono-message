import React, { MouseEvent } from "react";
import { TextInput, PasswordInput, Group, Button, Checkbox, Anchor, Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/types";
import { upperFirst } from "@mantine/hooks";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { notifications } from "@mantine/notifications";

type formProps = {
  form: UseFormReturnType<
    {
      email: string;
      password: string;
      terms: boolean;
    },
    (values: { email: string; password: string; terms: boolean }) => {
      email: string;
      password: string;
      terms: boolean;
    }
  >;
  type: string;
  toggle: (value?: React.SetStateAction<string> | undefined) => void;
};

export const PassAuth = (props: formProps) => {
  const { form, type, toggle } = props;

  const register = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, form.values.email, form.values.password);
      console.log("User registered successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.values.email, form.values.password);
    } catch (error) {
      notifications.show({
        title: "Login Error!",
        message: "Idまたはパスワードが間違っています 🤥",
        color: "red",
      });
    }
  };

  return (
    <div>
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="メールアドレスを入力してください"
            value={form.values.email}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password && "Password should include at least 6 characters"}
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group position="apart" className="pt-4">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button onClick={type == "register" ? register : login}>{upperFirst(type)}</Button>
        </Group>
      </form>
    </div>
  );
};
