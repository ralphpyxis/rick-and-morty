import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Loader,
  Center,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { fetchFromAPI } from "../utils/api";
import type { Location, ApiResponse } from "../types/api";

export const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchFromAPI<ApiResponse<Location>>("/location");
        setLocations(data.results);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, []);

  if (loading) {
    return (
      <Center h={400}>
        <Loader size="xl" />
      </Center>
    );
  }

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="md">
        Locations
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Explore the various planets, dimensions, and locations visited by Rick
        and Morty. From Earth to distant galaxies, discover the incredible
        worlds they travel to in their interdimensional adventures.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
        {locations.map((location) => (
          <Card
            key={location.id}
            title={location.name}
            subtitle={location.type}
            badges={[
              { label: location.dimension, color: "cyan" },
              {
                label: `${location.residents.length} residents`,
                color: "grape",
              },
            ]}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
