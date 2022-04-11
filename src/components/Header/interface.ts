export interface HeaderProps {
  title: string;
  icon?: string;
  isDetails?: boolean;
  customLeftIcon?: {
    icon: string;
    onPress(): void;
  }
}
