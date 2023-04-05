import React from "react";
import { TextInput, PasswordInput, Group, Button, Checkbox, Anchor, Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/types";
import { upperFirst } from "@mantine/hooks";

type formProps = {
  form: UseFormReturnType<
    {
      email: string;
      name: string;
      password: string;
      terms: boolean;
    },
    (values: { email: string; name: string; password: string; terms: boolean }) => {
      email: string;
      name: string;
      password: string;
      terms: boolean;
    }
  >;
  type: string;
  toggle: (value?: React.SetStateAction<string> | undefined) => void;
};

export const AuthForm = (props: formProps) => {
  const { form, type, toggle } = props;
  return (
    <div>
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Account Name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
              radius="md"
            />
          )}

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
          <Button type="submit">{upperFirst(type)}</Button>
        </Group>
      </form>
    </div>
  );
};
