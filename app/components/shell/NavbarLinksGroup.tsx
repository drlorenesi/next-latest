"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppShell, NavLink, ScrollArea, ThemeIcon } from "@mantine/core";
import {
  IconForms,
  IconGauge,
  IconGraph,
  IconTable,
} from "@tabler/icons-react";

import classes from "./NavbarLinksGroup.module.css";

export default function NavBarLinksGroup() {
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="md">
      <AppShell.Section grow component={ScrollArea}>
        <NavLink
          href="/"
          label="Dashboard"
          leftSection={
            <ThemeIcon variant="light" size="sm">
              <IconGauge style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
          }
          component={Link}
          active={pathname === "/"}
        />
        {/* Forms */}
        <NavLink
          label="Forms"
          leftSection={
            <ThemeIcon variant="filled" color="grape" size="sm">
              <IconForms style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="Dates"
            href="/forms/dates"
            component={Link}
            active={pathname === "/forms/dates"}
          />
          <NavLink
            className={classes.navLink}
            label="Numbers"
            href="/forms/numbers"
            component={Link}
            active={pathname === "/forms/numbers"}
          />
          <NavLink
            className={classes.navLink}
            label="Mixed"
            href="/forms/mixed"
            component={Link}
            active={pathname === "/forms/mixed"}
          />
        </NavLink>
        {/* Charts */}
        <NavLink
          label="Charts"
          leftSection={
            <ThemeIcon variant="filled" color="cyan" size="sm">
              <IconGraph style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="Dates"
            href="/reports/dates"
          />
        </NavLink>
        {/* Tables */}
        <NavLink
          label="Tables"
          leftSection={
            <ThemeIcon variant="filled" color="indigo" size="sm">
              <IconTable style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="First child link"
            href="#"
          />
          <NavLink
            className={classes.navLink}
            label="Second child link"
            href="#"
          />
          <NavLink
            className={classes.navLink}
            label="Third child link"
            href="#"
          />
        </NavLink>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
