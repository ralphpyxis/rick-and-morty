import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Loader,
  Center,
  LoadingOverlay,
  Box,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Pagination } from "../components/Pagination";
import { Filters } from "../components/Filters";
import type { FilterField } from "../components/Filters";
import { fetchFromAPI, buildQueryString } from "../utils/api";
import type { Location, ApiResponse, LocationFilters } from "../types/api";

const filterFields: FilterField[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "type", label: "Type", type: "text" },
  { name: "dimension", label: "Dimension", type: "text" },
];

export const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ count: 0, pages: 0 });
  const [filters, setFilters] = useState<LocationFilters>({});

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true);
      try {
        const queryString = buildQueryString({ page: currentPage, ...filters });
        const data = await fetchFromAPI<ApiResponse<Location>>(
          `/location${queryString}`
        );
        setLocations(data.results);
        setPageInfo({ count: data.info.count, pages: data.info.pages });
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      } finally {
        setLoading(false);
        setIsInitialLoad(false);
      }
    };

    loadLocations();
  }, [currentPage, filters]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const handleFilterReset = () => {
    setFilters({});
    setCurrentPage(1);
  };

  if (isInitialLoad && loading) {
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

      <Filters
        fields={filterFields}
        values={filters as Record<string, string | undefined>}
        onChange={handleFilterChange}
        onReset={handleFilterReset}
      />

      <Box pos="relative">
        <LoadingOverlay
          visible={loading}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
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
      </Box>

      <Pagination
        currentPage={currentPage}
        totalPages={pageInfo.pages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};
