import { useState } from 'react';

export default function ArtistOrCulture() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h3 className="text-xl font-bold mb-2">
        Buscar apenas por artista/cultura:
      </h3>
      <input type="checkbox" name="" id="" />
      <label className="flex items-center gap-2 cursor-pointer select-none">
        {/* Checkbox personalizado */}
        <div
          onClick={() => setChecked(!checked)}
          className={`w-5 h-5 flex items-center justify-center border-2 rounded transition-colors duration-200
          ${
            checked
              ? 'bg-blue-600 border-blue-600'
              : 'border-gray-400 bg-white dark:bg-gray-800'
          }
        `}
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

        {/* Label do checkbox */}
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Receber notificações
        </span>
      </label>
    </>
  );
}
