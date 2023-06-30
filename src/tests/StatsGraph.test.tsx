import { render } from '@testing-library/react';
import StatsGraph from '../app/components/StatsGraph';
import { statsDataMock } from '../mocks/statsMock';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../app/redux/storeApi', () => ({
  useStatsQuery: () => ({
    data: statsDataMock,
  }),
}));

jest.mock('react-chartjs-2', () => ({
  PolarArea: () => 'polar area',
}));

describe('StatsGraph tests', () => {
  it('should be displayed and contain title', () => {
    const { container } = render(<StatsGraph />);
    expect(container).toBeInTheDocument();
  });
});
