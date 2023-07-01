import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  let axiosSpy: jest.SpyInstance;
  let getSpy: jest.SpyInstance;

  beforeEach(() => {
    axiosSpy = jest.spyOn(axios, 'create');
    getSpy = jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue({
      data: 'response data',
    });
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi('some path');
    jest.runAllTimers();

    expect(axiosSpy).toHaveBeenCalledTimes(1);
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi('some path');

    expect(getSpy).toHaveBeenCalledWith('some path');
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi('some path');

    expect(result).toBe('response data');
  });
});
