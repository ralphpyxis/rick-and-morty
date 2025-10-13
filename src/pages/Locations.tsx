import { Container, Title, Text } from "@mantine/core";

export const Locations = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Locations
      </Title>
      <Text size="lg" c="dimmed">
        Explore the various planets, dimensions, and locations visited by Rick
        and Morty. From Earth to distant galaxies, discover the incredible
        worlds they travel to in their interdimensional adventures.
      </Text>
    </Container>
  );
};
