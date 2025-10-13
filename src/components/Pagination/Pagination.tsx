import { Group, Button, Text } from "@mantine/core";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <Group justify="center" mt="xl">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
      >
        Previous
      </Button>

      <Text size="sm">
        Page {currentPage} of {totalPages}
      </Text>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
      >
        Next
      </Button>
    </Group>
  );
};
