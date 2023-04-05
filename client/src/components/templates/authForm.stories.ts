import React from "react";

import { AuthForm } from "./authForm";

export default {
  component: AuthForm,
  title: "Auth",
};

const AuthForm = args => <AuthForm {...args} />;

export const Default = AuthForm.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },