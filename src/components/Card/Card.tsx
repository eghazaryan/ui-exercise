import {
  Card as MantineCard,
  Image,
  Text,
  Badge,
  Group,
  Title,
  Button,
  UnstyledButton,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBookmark, IconHeart } from "@tabler/icons-react";
import { CardData } from "../../types";
import useStyles from "./Card.styles";
import { statNames } from "./get-stat-name";
import { IconRatingStar } from "../IconRatingStar/IconRatingStar";

export interface CardProps {
  data: CardData;
}

export function Card({ data }: CardProps) {
  const { classes } = useStyles();

  const imageSlides = data.images.map((image, index) => (
    <Carousel.Slide w={"98%"} key={index}>
      <Image src={image} />
    </Carousel.Slide>
  ));

  const fishes = data.fish.map((fish, index) => (
    <Text key={index} className={classes.fish} color="dimmed">
      {fish}
    </Text>
  ));

  const stats = data.stats.map((stat, index) => (
    <Text className={classes.stat} key={index}>
      {statNames[stat.id]} <IconRatingStar rating={stat.value} />
    </Text>
  ));

  return (
    <MantineCard className={classes.root} shadow="sm" withBorder>
      <MantineCard.Section>
        <Carousel
          classNames={{
            indicator: classes.indicator,
          }}
          withIndicators
          loop
        >
          {imageSlides}
        </Carousel>
      </MantineCard.Section>

      <Group position="apart" mt="md" mb={4}>
        <Title className={classes.title}>{data.name}</Title>

        <div>
          <IconHeart stroke={1} size={28} />
          <IconBookmark stroke={1} size={30} />
        </div>
      </Group>

      <Group mb={4}>
        <Badge>License {data.license ? data.license : "free"}</Badge>
        <Badge>{data.boat ? "On boat" : "On shore"}</Badge>
      </Group>

      <div className={classes.rating}>
        <IconRatingStar rating={data.rating} />

        <UnstyledButton className={classes.comments}>
          <Text color="dimmed">({data.comments} Comments)</Text>
        </UnstyledButton>
      </div>

      <div className={classes.stats}>{stats} </div>

      <Text className={classes.subTitle}>Fishes in spot</Text>
      <div className={classes.fishes}>{fishes}</div>

      <Text className={classes.subTitle}>Spot Description</Text>
      <Text color="dimmed">{data.description}</Text>

      <Button className={classes.button} variant="light" fullWidth>
        Visit fishing spot
      </Button>
    </MantineCard>
  );
}
