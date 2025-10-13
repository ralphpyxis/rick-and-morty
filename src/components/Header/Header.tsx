import {
  Flex,
  Title,
  Anchor,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Flex
      p="20px 40px"
      justify="space-between"
      align="center"
      style={{
        borderBottom: `1px solid var(${
          computedColorScheme === "dark"
            ? "--mantine-color-dark-4"
            : "--mantine-color-gray-3"
        })`,
        backgroundColor: `var(${
          computedColorScheme === "dark"
            ? "--mantine-color-dark-7"
            : "--mantine-color-gray-0"
        })`,
      }}
    >
      <Anchor component={Link} to="/" style={{ textDecoration: "none" }}>
        <Title order={2} c="blue">
          Rick and Morty
        </Title>
      </Anchor>
      <Flex gap="xl" align="center">
        <Anchor component={Link} to="/characters" size="lg" fw={500}>
          Characters
        </Anchor>
        <Anchor component={Link} to="/locations" size="lg" fw={500}>
          Locations
        </Anchor>
        <ActionIcon
          onClick={toggleColorScheme}
          variant="default"
          size="lg"
          aria-label="Toggle color scheme"
        >
          {computedColorScheme === "dark" ? (
            <IconSun size={20} stroke={1.5} />
          ) : (
            <IconMoon size={20} stroke={1.5} />
          )}
        </ActionIcon>
      </Flex>
    </Flex>
  );
};
