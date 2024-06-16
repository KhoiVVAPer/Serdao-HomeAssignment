import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

export type DropdownItem = {
  id: string;
  label: string;
};

export type DropDownProps = {
  data: DropdownItem[];
  onChange: (value: string) => void;
  value: string;
};

const DropDown: React.FC<DropDownProps> = ({
  data,
  onChange,
  value,
}: DropDownProps) => {
  console.log('values222', value);

  return (
    <Dropdown
      data={data}
      value={value}
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      labelField="label"
      valueField="id"
      onChange={({id}) => onChange(id)}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
