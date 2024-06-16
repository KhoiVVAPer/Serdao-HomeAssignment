import React from 'react';
import {
  StyleSheet,
  ViewProps,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
} from 'react-native';
import {APP_COLORS} from '@assets/colors';
import {images} from '@assets/images';

export type AppHeaderProps = ViewProps & {
  onPressPrefixIcon?: () => void;
  title: string;
  prefixIcon?: ImageSourcePropType;
};

const AppHeader: React.FC<AppHeaderProps> = ({
  onPressPrefixIcon,
  title,
  prefixIcon,
}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      {onPressPrefixIcon && (
        <Pressable onPress={onPressPrefixIcon} style={styles.prefixSection}>
          {
            <Image
              source={prefixIcon ?? images.backArrow}
              style={styles.icon}
            />
          }
        </Pressable>
      )}
      <View style={styles.titleSection}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingVertical: 10,
  },
  prefixSection: {
    height: 28,
    width: 28,
    marginBottom: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: APP_COLORS.buttonLabel,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
