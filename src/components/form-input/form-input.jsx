import "./form-input.styles";
import {FormInputLabel, Group, Input} from "./form-input.styles";

export function FormInput({label, ...otherProps}) {
  return (
      <Group>
        <Input type="text" {...otherProps}/>
        {
            label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
        }
      </Group>
  );
}