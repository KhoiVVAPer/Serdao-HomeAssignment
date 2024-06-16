import React from 'react';
import {ViewProps, Keyboard, Pressable} from 'react-native';

export type FormWrapperProps = ViewProps;

const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  ...resProps
}: FormWrapperProps) => {
  return (
    <Pressable onPress={Keyboard.dismiss} {...resProps}>
      <>{children}</>
    </Pressable>
  );
};

export default FormWrapper;
