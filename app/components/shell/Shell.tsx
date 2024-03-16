"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import cx from "clsx";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Group,
  Menu,
  rem,
  Text,
  UnstyledButton,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSun,
  IconMoon,
  IconLogout,
  IconUserCog,
} from "@tabler/icons-react";

// Components
import NavbarLinksGroup from "./NavbarLinksGroup";
import Footer from "./Footer";
import classes from "./Shell.module.css";

interface ShellProps {
  children: ReactNode;
  // Add any other props here
}

const Shell: React.FC<ShellProps> = ({ children, ...props }) => {
  // Toggle menu hooks
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  // Color scheme hooks
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      {...props}
    >
      {/* 1. Header */}
      <AppShell.Header>
        {/* 1A. Header Right */}
        <Group h="100%" px="sm" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <UnstyledButton component={Link} href="/">
              <Text
                size="xl"
                fw={900}
                variant="gradient"
                gradient={{ from: "blue", to: "violet", deg: 90 }}
              >
                Next.js App
              </Text>
            </UnstyledButton>
          </Group>
          {/* 1B. Header Left */}
          <Group justify="flex-end" gap="xs">
            {/* 1B - I - Darkmode */}
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light",
                )
              }
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
            >
              <IconSun
                className={cx(classes.icon, classes.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(classes.icon, classes.dark)}
                stroke={1.5}
              />
            </ActionIcon>
            {/* 1B - II - Profile Menu */}
            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                <UnstyledButton>
                  <Avatar color="cyan" radius="xl" />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <IconUserCog style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Mi Perfil
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={
                    <IconLogout style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Cerrar Sesión
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      {/* 2. Navbar */}
      <NavbarLinksGroup />
      {/* 3. Main */}
      <AppShell.Main
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {children}
        {/* 4. Footer */}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
};

export default Shell;
