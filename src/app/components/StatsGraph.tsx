import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Colors, Legend,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { useStatsQuery } from '../redux/storeApi';
import Loader from './Loader';

ChartJS.register(RadialLinearScale, ArcElement, Colors, Legend, Tooltip);

const StatsGraph = () => {
  const navigate = useNavigate();
  const { data: statsData, isLoading } = useStatsQuery();
  if (!statsData) return null;

  const labels = statsData.map(d => d.category);
  const numberOfProducts = statsData.map(d => d.numberOfProducts);
  const options = {
    plugins: {
      colors: { enabled: true },
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };
  const data: ChartData<'polarArea'> = {
    labels,
    datasets: [
      {
        label: 'Products',
        data: numberOfProducts,
      },
    ],
  };

  return (
    <div className='chart container'>
      <Loader loading={ isLoading } />
      <div className='chart__title'>Products Categories Statistics</div>
      <section className='chart__graph'>
        <PolarArea data={ data } options={ options } />
      </section>
      <button onClick={ () => navigate('/') }>Back</button>
    </div>
  );
};

export default StatsGraph;
