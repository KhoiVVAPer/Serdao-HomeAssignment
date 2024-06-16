import {useField} from 'formik';
import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import DropDown, {DropdownItem} from '../dropdown/Dropdown';

type InputType = 'input' | 'dropdown';

export type InputFieldProps = TextInputProps & {
  name: string;
  type?: InputType;
  data?: DropdownItem[];
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = 'input',
  data,
  ...restProps
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <View style={styles.container}>
      {type === 'input' && (
        <TextInput
          style={styles.input}
          value={field.value}
          onChangeText={field.onChange(name)}
          {...restProps}
        />
      )}
      {type === 'dropdown' && data && (
        <DropDown
          data={data}
          value={field.value}
          onChange={field.onChange(name)}
        />
      )}

      <View style={styles.errorContainer}>
        <Text style={styles.error}>{meta?.error}</Text>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
  errorContainer: {
    marginTop: 3,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
