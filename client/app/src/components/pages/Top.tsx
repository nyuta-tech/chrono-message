import { Group, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import React, { useEffect } from "react";
export const Top = () => {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: "Default notification",
            message: "Hey there, your code is awesome! 🤥",
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
};
