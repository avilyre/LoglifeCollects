interface CustomIcon {
  icon: string;
  onPress(): void;
}

export interface HeaderProps {
  title: string;
  icon?: string;
  isDetails?: boolean;
  customLeftIcon?: CustomIcon
  customRightIcon?: CustomIcon
}

export interface ControlProps {
  isEnableRightIcon?: boolean;
}
