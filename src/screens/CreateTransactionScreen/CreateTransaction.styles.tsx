import {Platform, StyleSheet} from 'react-native';
import {APP_COLORS} from '@assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.background,
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 10 : 20,
  },
  content: {
    flex: 1,
  },
});
