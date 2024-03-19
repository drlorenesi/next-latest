"use client";

import { Grid, Skeleton, Title } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Layout1() {
  return (
    <>
      <Title order={2}>Layout 1</Title>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 5 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
      </Grid>
    </>
  );
}
