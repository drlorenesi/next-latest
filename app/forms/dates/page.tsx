"use client";

import { Grid, Title } from "@mantine/core";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";

export default function Dates() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <Title order={2}>Dates</Title>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <DatePickerInput
            clearable
            label="Pick date"
            placeholder="Pick date"
            value={value}
            onChange={setValue}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>Column 2</Grid.Col>
        <hr />
        <Grid.Col span={{ base: 12, xs: 12 }}>Row 2</Grid.Col>
      </Grid>
    </>
  );
}
