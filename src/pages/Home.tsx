import { Container, Title, Text } from "@mantine/core";

export const Home = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Welcome to Rick and Morty
      </Title>
      <Text size="lg" c="dimmed">
        Explore the multiverse with Rick Sanchez and his grandson Morty Smith.
        Discover characters, locations, and adventures across infinite
        dimensions.
      </Text>
    </Container>
  );
};
