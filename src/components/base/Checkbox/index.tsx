'use client';

import { KeyboardEvent, useCallback } from 'react';
import { CheckboxProps } from './types';

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
}: CheckboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const allowedKeys = ['Enter', 'Space'];
      if (allowedKeys.includes(event.code)) onChange(!checked);
    },
    [checked, onChange]
  );

  return (
    <div
      className="cursor-pointer select-none dark:focus-within:bg-gray-800 focus-within:ring-2 ring-text"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={name}
        className="flex items-center gap-2 p-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
      >
        <div
          role="checkbox"
          aria-checked={checked}
          className={`w-5 h-5 flex items-center justify-center border-2 rounded transition-colors duration-200 ${
            checked
              ? 'bg-blue-800 border-blue-500'
              : 'border-gray-400 bg-white dark:bg-gray-800'
          } cursor-pointer`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="white"
              strokeWidth="3"
              className="w-3 h-3"
            >
              <path d="M5 10l3 3 7-7" />
            </svg>
          )}
        </div>
        <span>{label}</span>
      </label>
    </div>
  );
}
