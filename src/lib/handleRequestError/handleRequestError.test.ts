import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { handleRequestError } from '.';

describe('handleRequestError', () => {
  const consoleErrorSpy = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  beforeEach(() => {
    consoleErrorSpy.mockClear();
  });

  it('deve registrar o erro no console com o contexto correto', () => {
    const context = 'artwork data';
    const error = new Error('Falha na requisição');

    handleRequestError(context, error);

    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `Error fetching ${context}:`,
      error
    );
  });

  it('deve retornar o valor de fallback fornecido', () => {
    const fallback = { total: 0 };
    const result = handleRequestError('fetch IDs', 'error', fallback);

    expect(result).toBe(fallback);
  });

  it('deve retornar null se nenhum fallback for fornecido', () => {
    const result = handleRequestError('fetch something', 'error');
    expect(result).toBeNull();
  });
});
