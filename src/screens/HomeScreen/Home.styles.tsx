import {StyleSheet} from 'react-native';
import {APP_COLORS} from '@assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: APP_COLORS.background,
  },
  titleSection: {
    marginVertical: 5,
  },
  titleLabel: {
    fontSize: 18,
  },
  header: {
    height: 100,
    width: '100%',
  },
  horizontalSpace: {
    width: 10,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
  },
  emptyListBG: {
    height: 200,
    width: 200,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: APP_COLORS.background,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
    width: '100%',
  },
});
