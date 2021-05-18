import { renderHook } from '@testing-library/react-hooks';
import { HistoricProvider, useHistoric } from '../../hooks/historic';

describe('Historic Hook', () => {
  it('should be able to load', () => {
    const { result } = renderHook(() => useHistoric(), {
      wrapper: HistoricProvider,
    });

    expect(result.current).toBeTruthy();

  });
});
