import {ColorValue} from 'react-native';
import {FontAwesome5IconProps} from 'react-native-vector-icons/FontAwesome5';

type IconProps = Partial<FontAwesome5IconProps> & {
  name: string;
  size?: number;
  color?: ColorValue;
};

export type AppIcon = React.FC<Omit<IconProps, 'name'>>;
