import {
  ActionIcon,
  AppShell,
  NavLink,
  ScrollArea,
  ThemeIcon,
} from "@mantine/core";
import {
  IconForms,
  IconGauge,
  IconGraph,
  IconTable,
} from "@tabler/icons-react";

import classes from "./NavbarLinksGroup.module.css";

export default function NavBarLinksGroup() {
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
        />
        {/* Charts */}
        <NavLink
          label="Charts"
          leftSection={
            <ThemeIcon variant="filled" color="cyan" size="sm">
              <IconGraph style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="Dates"
            href="/reports/dates"
          />
        </NavLink>
        {/* Reports */}
        <NavLink
          label="Reports"
          leftSection={
            <ActionIcon variant="filled" color="cyan" size="sm">
              <IconGraph style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="Dates"
            href="/reports/dates"
          />
          <NavLink
            className={classes.navLink}
            label="Numbers"
            href="/reports/numbers"
          />
          <NavLink
            className={classes.navLink}
            label="Third child link"
            href="#"
          />
        </NavLink>
        {/* Forms */}
        <NavLink
          label="Forms"
          leftSection={
            <ActionIcon variant="filled" color="grape" size="sm">
              <IconForms style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="Dates"
            href="/forms/dates"
          />
          <NavLink
            className={classes.navLink}
            label="Numbers"
            href="/forms/numbers"
          />
          <NavLink
            className={classes.navLink}
            label="Third child link"
            href="#"
          />
        </NavLink>
        {/* Tables */}
        <NavLink
          label="Third parent link"
          leftSection={
            <ActionIcon variant="filled" color="indigo" size="sm">
              <IconTable style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
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
