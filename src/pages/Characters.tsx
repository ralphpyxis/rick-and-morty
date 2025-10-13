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
import type { Character, ApiResponse, CharacterFilters } from "../types/api";

const filterFields: FilterField[] = [
  { name: "name", label: "Name", type: "text" },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "alive", label: "Alive" },
      { value: "dead", label: "Dead" },
      { value: "unknown", label: "Unknown" },
    ],
  },
  { name: "species", label: "Species", type: "text" },
  { name: "type", label: "Type", type: "text" },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: [
      { value: "female", label: "Female" },
      { value: "male", label: "Male" },
      { value: "genderless", label: "Genderless" },
      { value: "unknown", label: "Unknown" },
    ],
  },
];

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ count: 0, pages: 0 });
  const [filters, setFilters] = useState<CharacterFilters>({});

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const queryString = buildQueryString({ page: currentPage, ...filters });
        const data = await fetchFromAPI<ApiResponse<Character>>(
          `/character${queryString}`
        );
        setCharacters(data.results);
        setPageInfo({ count: data.info.count, pages: data.info.pages });
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      } finally {
        setLoading(false);
        setIsInitialLoad(false);
      }
    };

    loadCharacters();
  }, [currentPage, filters]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const handleFilterReset = () => {
    setFilters({});
    setCurrentPage(1);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "green";
      case "dead":
        return "red";
      default:
        return "gray";
    }
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
        Characters
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Meet all the characters from the Rick and Morty universe. From the
        brilliant but alcoholic Rick Sanchez to the innocent Morty Smith, and
        all the weird and wonderful beings they encounter across the multiverse.
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
          {characters.map((character) => (
            <Card
              key={character.id}
              image={character.image}
              title={character.name}
              subtitle={character.species}
              badges={[
                {
                  label: character.status,
                  color: getStatusColor(character.status),
                },
                { label: character.gender, color: "violet" },
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
