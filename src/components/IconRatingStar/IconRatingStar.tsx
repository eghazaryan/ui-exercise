import { Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

interface StarIconProps {
  rating: number;
  size?: number;
  color?: string;
}

export function IconRatingStar({
  rating,
  size = 18,
  color = "#eccb7a",
}: StarIconProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: 6 }}>
      <IconStar size={size} color={color} fill={color} />
      <Text weight={500} mr={6} ml={6}>
        {rating}
      </Text>
    </div>
  );
}
