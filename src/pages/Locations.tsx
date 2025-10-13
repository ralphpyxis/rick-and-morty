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
import { Pagination } from "../components/Pagination";
import { fetchFromAPI } from "../utils/api";
import type { Location, ApiResponse } from "../types/api";

export const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ count: 0, pages: 0 });

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true);
      try {
        const data = await fetchFromAPI<ApiResponse<Location>>(
          `/location?page=${currentPage}`
        );
        setLocations(data.results);
        setPageInfo({ count: data.info.count, pages: data.info.pages });
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, [currentPage]);

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

      <Pagination
        currentPage={currentPage}
        totalPages={pageInfo.pages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};
