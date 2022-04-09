export interface CardItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CardProps {
  items: CardItemProps[];
  onPress(): void;
}