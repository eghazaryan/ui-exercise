import { Flex } from "@mantine/core";
import { Card } from "../components/Card";
import { CardData } from "../types";

const data: CardData = {
  id: "great-barrier-reef",
  name: "The Great Barrier Reef",
  description:
    "The Great Barrier Reef in Australia offers a diverse range of fishing opportunities for both amateur and experienced anglers, with a variety of species such as coral trout, red emperor, and mackerel.",
  license: false,
  boat: true,
  fish: ["Salmon", "Cod", "Trout"],
  rating: 4.5,
  comments: 43,
  bookmarked: false,
  stats: [
    { id: "infrastructure", value: 6.7 },
    { id: "popularity", value: 3.7 },
    { id: "availability", value: 8.5 },
    { id: "fish_size", value: 5.4 },
  ],
  images: [
    "https://images.unsplash.com/photo-1545450660-3378a7f3a364?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1485452499676-62ab02c20e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1604336102823-1a4df72dfa26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1506873589908-63bc22175dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2720&q=80",
    "https://images.unsplash.com/photo-1567517412043-7b2c07aa08f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  ],
};

export function FishingSpots() {
  return (
    <Flex justify="center" mt={50}>
      <Card data={data} />
    </Flex>
  );
}
