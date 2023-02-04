import {FieldValues, FieldErrors, Path, Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type InputProps<T extends FieldValues> = TextInputProps & {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
};
