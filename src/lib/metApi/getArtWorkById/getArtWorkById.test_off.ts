import { handleRequestError } from '@/lib/handleRequestError';
import { getArtWorkById, requester } from '@/lib/metApi';

jest.mock('@/lib/metApi/', () => ({
  requester: {
    get: jest.fn(),
  },
}));

jest.mock('@/lib/handleRequestError');

const mockedRequester = requester as jest.Mocked<typeof requester>;

describe('getArtWorkById', () => {
  const objectId = '199313';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar os dados da obra quando o request da API for bem sucedido', async () => {
    const mockData = {
      objectID: '199313',
      title: 'Portrait of Napoleon I',
      artistDisplayName: 'baron François Gérard',
    };

    mockedRequester.get.mockResolvedValueOnce({ data: mockData });

    const result = await getArtWorkById(objectId);

    expect(mockedRequester.get).toHaveBeenCalledWith(`/objects/${objectId}`);
    expect(result).toEqual(mockData);
  });

  it('deve chamar o handleRequestError e retornar seu resultado quando o request da API falhar', async () => {
    const mockError = new Error('Network error');
    const mockErrorReturn = null;

    mockedRequester.get.mockRejectedValueOnce(mockError);
    (handleRequestError as jest.Mock).mockReturnValueOnce(mockErrorReturn);

    const result = await getArtWorkById(objectId);

    expect(handleRequestError).toHaveBeenCalledWith(
      `art work by ID: "${objectId}"`,
      mockError
    );
    expect(result).toBe(mockErrorReturn);
  });
});
