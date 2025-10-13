import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Card,
  ThemeIcon,
  rem,
  Box,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IconUsers, IconMapPin, IconSparkles } from "@tabler/icons-react";
import "./Home.css";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

export const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: IconUsers,
      title: "Characters",
      description:
        "Explore hundreds of unique characters across the multiverse",
      color: "blue",
      path: "/characters",
    },
    {
      icon: IconMapPin,
      title: "Locations",
      description: "Discover countless dimensions and exotic locations",
      color: "green",
      path: "/locations",
    },
    {
      icon: IconSparkles,
      title: "Adventures",
      description: "Dive into the infinite adventures of Rick and Morty",
      color: "violet",
      path: "/characters",
    },
  ];

  return (
    <Box className="home-container">
      {/* Animated Portal Background */}
      <div className="portal-container">
        <svg
          className="portal"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="portalGradient">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00ccff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0066ff" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <circle
            className="portal-ring portal-ring-1"
            cx="100"
            cy="100"
            r="80"
          />
          <circle
            className="portal-ring portal-ring-2"
            cx="100"
            cy="100"
            r="60"
          />
          <circle
            className="portal-ring portal-ring-3"
            cx="100"
            cy="100"
            r="40"
          />
          <circle className="portal-core" cx="100" cy="100" r="20" />
        </svg>

        {/* Floating Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Container size="lg" py={80} style={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: rem(60) }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Title
              order={1}
              size={rem(54)}
              fw={900}
              mb="md"
              style={{
                background: "linear-gradient(45deg, #00ff88, #00ccff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Welcome to the Multiverse
            </Title>
          </motion.div>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Text size="xl" c="dimmed" maw={700} mx="auto" mb="xl">
              Explore the multiverse with Rick Sanchez and his grandson Morty
              Smith. Discover characters, locations, and adventures across
              infinite dimensions.
            </Text>

            <Group justify="center" mt={40}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "cyan", to: "blue", deg: 90 }}
                  onClick={() => navigate("/characters")}
                >
                  Explore Characters
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/locations")}
                >
                  View Locations
                </Button>
              </motion.div>
            </Group>
          </MotionBox>
        </MotionBox>

        {/* Feature Cards */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt={60}>
          {features.map((feature, index) => (
            <MotionCard
              key={feature.title}
              shadow="md"
              radius="lg"
              padding="xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 200, 255, 0.3)",
              }}
              style={{
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.9)",
              }}
              onClick={() => navigate(feature.path)}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ThemeIcon
                  size={60}
                  radius="md"
                  variant="gradient"
                  gradient={{ from: feature.color, to: "cyan", deg: 135 }}
                  mb="md"
                >
                  <feature.icon style={{ width: rem(32), height: rem(32) }} />
                </ThemeIcon>
              </motion.div>
              <Title order={3} mb="xs">
                {feature.title}
              </Title>
              <Text size="sm" c="dimmed">
                {feature.description}
              </Text>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* Floating Dimension Text */}
        <MotionBox
          mt={80}
          style={{ textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Text size="lg" fw={500} c="dimmed" style={{ fontStyle: "italic" }}>
              "Infinite timelines, infinite possibilities... Wubba Lubba Dub
              Dub!"
            </Text>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
};
