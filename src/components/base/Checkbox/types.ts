export interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
