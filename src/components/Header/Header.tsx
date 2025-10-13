import { Flex } from "@mantine/core";

export const Header = () => {
  return (
    <Flex
      p="20px 40px"
      justify="space-between"
      style={{
        borderBottom: "1px solid white",
      }}
    >
      <p>Rick and morty</p>
      <Flex gap="md">
        <p>Characters</p>
        <p>Locations</p>
      </Flex>
    </Flex>
  );
};
