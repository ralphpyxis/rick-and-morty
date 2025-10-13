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
import type { Character, ApiResponse } from "../types/api";

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ count: 0, pages: 0 });

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const data = await fetchFromAPI<ApiResponse<Character>>(
          `/character?page=${currentPage}`
        );
        setCharacters(data.results);
        setPageInfo({ count: data.info.count, pages: data.info.pages });
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [currentPage]);

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
        Characters
      </Title>
      <Text size="lg" c="dimmed" mb="xl">
        Meet all the characters from the Rick and Morty universe. From the
        brilliant but alcoholic Rick Sanchez to the innocent Morty Smith, and
        all the weird and wonderful beings they encounter across the multiverse.
      </Text>

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

      <Pagination
        currentPage={currentPage}
        totalPages={pageInfo.pages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};
