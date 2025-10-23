import { ChangeEvent } from 'react';

export interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
