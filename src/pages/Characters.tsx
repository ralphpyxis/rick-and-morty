import { Container, Title, Text } from "@mantine/core";

export const Characters = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Characters
      </Title>
      <Text size="lg" c="dimmed">
        Meet all the characters from the Rick and Morty universe. From the
        brilliant but alcoholic Rick Sanchez to the innocent Morty Smith, and
        all the weird and wonderful beings they encounter across the multiverse.
      </Text>
    </Container>
  );
};
