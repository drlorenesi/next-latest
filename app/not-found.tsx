"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Stack } from "@mantine/core";
import Missing from "@/public/img/404_not_found.png";

export default function NotFound() {
  const router = useRouter();

  return (
    <Stack h={300} bg="var(--mantine-color-body)" align="center">
      <Image
        src={Missing}
        alt="Not found"
        width={200}
        quality={100}
        placeholder="blur"
      />
      <samp>Ocurrión un problema.</samp>
      <p>No pudimos encontrar la página que buscas.</p>
      <div>
        <Button variant="transparent" color="gray" component={Link} href="/">
          A Inicio
        </Button>
        <Button onClick={() => router.back()}>Atrás</Button>
      </div>
    </Stack>
  );
}
