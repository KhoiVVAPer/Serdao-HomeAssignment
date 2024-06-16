import React from 'react';
import {
  StyleSheet,
  ViewProps,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {APP_COLORS} from '@assets/colors';

export type CustomButtonProps = ViewProps & {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  icon?: ImageSourcePropType;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  disabled,
  onPress,
  icon,
  ...resProps
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      {...resProps}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: APP_COLORS.primary,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: APP_COLORS.buttonLabel,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  disabled: {
    backgroundColor: 'rgba(217, 217, 217, 0.4)',
    borderColor: 'rgba(217, 217, 217, 0.4)',
    opacity: 0.7,
  },
});
