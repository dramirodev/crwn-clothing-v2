import './form-input.styles';
import { FormInputLabel, Group, Input } from './form-input.styles';

interface FormInputProps {
  label: string;

  [key: string]: any;
}

export function FormInput ({
  label,
  ...otherProps
}: FormInputProps) {
  return (
    <Group>
      <Input type="text" {...otherProps}/>
      {
        label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
      }
    </Group>
  );
}
