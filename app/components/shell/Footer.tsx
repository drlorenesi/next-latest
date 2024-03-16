import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandMantine, IconBrandGithub } from "@tabler/icons-react";
import classes from "./Footer.module.css";

const data = [
  {
    title: "Enlaces",
    links: [
      { label: "Fábrica Granada", link: "https://granada.com.gt/" },
      {
        label: "Tipo de Cambio - BANGUAT",
        link: "https://banguat.gob.gt/tipo_cambio/",
      },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target="_blank"
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer} style={{ marginTop: "auto" }}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <ActionIcon
            component="a"
            href="https://mantine.dev/"
            target="_blank"
            size="lg"
            color="grey"
            variant="subtle"
          >
            <IconBrandMantine size={30} />
          </ActionIcon>
          <Text size="xs" c="dimmed" className={classes.description}>
            Crea aplicaciones web accesibles y completamente funcionales más
            rápido que nunca.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Group
          gap={0}
          className={classes.social}
          justify="center"
          wrap="nowrap"
        >
          <Text c="dimmed" size="sm">
            &copy; {new Date().getFullYear()} Company.
          </Text>
          <ActionIcon
            component="a"
            href="https://github.com/drlorenesi"
            target="_blank"
            size="lg"
            color="grey"
            variant="subtle"
          >
            {" "}
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
