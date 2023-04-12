import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { getAuth, signOut } from "firebase/auth";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserIdAtom, UserInfoAtom } from "../../state/atoms/UserAtom";
import React from "react";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export const User = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [userId, setUserId] = useRecoilState(UserIdAtom);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    if (!userId) {
      navigate("/auth");
    }
  }, [userId, navigate]);

  const onClickLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth");
      })
      .catch((error) => {
        // An error happened.
      });
    setUserId(null);
    setUserInfo(null);
  }, []);

  const { classes } = useStyles();
  return (
    <div>
      <Group className="align-center">
        <Avatar src={userInfo?.icon} size={94} radius="md" />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            {userInfo?.userName}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            {/* <IconAt strokke={1.5} size="1rem" className={classes.icon} /> */}
            <Text fz="xs" c="dimmed">
              {userInfo?.email}
            </Text>
          </Group>
        </div>

        <div>
          <button onClick={onClickLogout}>ログアウト</button>
        </div>
      </Group>
    </div>
  );
};
