import getData from '../../../../utils/getData';

describe('Fetch Api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar una Api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com') //La funcion va a ser llamada, sera agnositca a lo que le estoy pasando. Esto solo simula que la respuesta sea 123456
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com'); // es para garantizar que la llamada a google esta siendo ejecutada
  });
});
