"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppShell,
  NavLink,
  ScrollArea,
  ThemeIcon,
  ThemeIconProps,
} from "@mantine/core";
import {
  IconForms,
  IconGauge,
  IconGraph,
  IconTable,
} from "@tabler/icons-react";
import classes from "./NavbarLinksGroup.module.css";

// Define the types for navigation links
interface NavLinkProps {
  href?: string;
  label: string;
  icon?: React.ReactElement<ThemeIconProps>;
  variant?: ThemeIconProps["variant"];
  color?: ThemeIconProps["color"];
  children?: NavLinkProps[];
}

// Define the navigation links data
const navLinks: NavLinkProps[] = [
  {
    href: "/",
    label: "Dashboard",
    icon: <IconGauge style={{ width: "70%", height: "70%" }} />,
    variant: "light",
  },
  {
    label: "Forms",
    icon: <IconForms style={{ width: "70%", height: "70%" }} />,
    variant: "filled",
    color: "grape",
    children: [
      { href: "/forms/dates", label: "Dates" },
      { href: "/forms/numbers", label: "Numbers" },
      { href: "/forms/mixed", label: "Mixed" },
    ],
  },
  {
    label: "Charts",
    icon: <IconGraph style={{ width: "70%", height: "70%" }} />,
    variant: "filled",
    color: "cyan",
    children: [{ href: "/charts/dates", label: "Dates" }],
  },
  {
    label: "Tables",
    icon: <IconTable style={{ width: "70%", height: "70%" }} />,
    variant: "filled",
    color: "indigo",
    children: [
      { href: "#", label: "First child link " },
      { href: "#", label: "Second child link" },
      { href: "#", label: "Third child linked" },
    ],
  },
];

// Create a reusable NavigationLink component
const NavigationLink: React.FC<{ link: NavLinkProps; pathname: string }> = ({
  link,
  pathname,
}) => {
  const isActive = pathname === link.href;

  if (link.children) {
    return (
      <NavLink
        label={link.label}
        leftSection={
          <ThemeIcon variant={link.variant} color={link.color} size="sm">
            {link.icon}
          </ThemeIcon>
        }
      >
        {link.children.map((childLink) => (
          <NavLink
            key={childLink.href}
            className={classes.navLink}
            label={childLink.label}
            href={childLink.href || ""} // Handle undefined case
            component={Link}
            active={pathname === childLink.href}
          />
        ))}
      </NavLink>
    );
  }

  if (typeof link.href === "string") {
    // Type guard
    return (
      <NavLink
        href={link.href}
        label={link.label}
        leftSection={
          <ThemeIcon variant={link.variant} color={link.color} size="sm">
            {link.icon}
          </ThemeIcon>
        }
        component={Link}
        active={isActive}
      />
    );
  }

  // Handle undefined case
  return null;
};

export default function NavBarLinksGroup() {
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="md">
      <AppShell.Section grow component={ScrollArea}>
        {navLinks.map((link) => (
          <NavigationLink
            key={link.href || link.label}
            link={link}
            pathname={pathname}
          />
        ))}
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
