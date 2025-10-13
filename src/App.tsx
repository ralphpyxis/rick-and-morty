import { useState } from "react";
import { Container, Title, Button, Text, Stack } from "@mantine/core";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container size="sm" mt="xl">
      <Stack align="center" gap="md">
        <Title order={1}>Rick and Morty App</Title>
        <Text size="lg" c="dimmed">
          Built with Vite + React + Mantine
        </Text>
        <Button
          onClick={() => setCount((count) => count + 1)}
          size="lg"
          variant="filled"
        >
          Count is {count}
        </Button>
        <Text size="sm" c="dimmed">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Stack>
    </Container>
  );
}

export default App;
