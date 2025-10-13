import { Card as MantineCard, Image, Text, Badge, Group } from "@mantine/core";

interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  badges?: { label: string; color?: string }[];
}

export const Card = ({ image, title, subtitle, badges }: CardProps) => {
  return (
    <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
      {image && (
        <MantineCard.Section>
          <Image src={image} height={200} alt={title} />
        </MantineCard.Section>
      )}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      {subtitle && (
        <Text size="sm" c="dimmed" mb="xs">
          {subtitle}
        </Text>
      )}

      {badges && badges.length > 0 && (
        <Group gap="xs">
          {badges.map((badge, index) => (
            <Badge key={index} color={badge.color || "blue"} variant="light">
              {badge.label}
            </Badge>
          ))}
        </Group>
      )}
    </MantineCard>
  );
};
