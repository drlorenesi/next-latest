import Link from "next/link";
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Button component={Link} href="/hello">
        Next link button
      </Button>
    </main>
  );
}
