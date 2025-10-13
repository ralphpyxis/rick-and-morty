import { Flex, Title, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      p="20px 40px"
      justify="space-between"
      align="center"
      style={{
        borderBottom: "1px solid #e9ecef",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Anchor component={Link} to="/" style={{ textDecoration: "none" }}>
        <Title order={2} c="blue">
          Rick and Morty
        </Title>
      </Anchor>
      <Flex gap="xl">
        <Anchor component={Link} to="/characters" size="lg" fw={500} c="dark">
          Characters
        </Anchor>
        <Anchor component={Link} to="/locations" size="lg" fw={500} c="dark">
          Locations
        </Anchor>
      </Flex>
    </Flex>
  );
};
