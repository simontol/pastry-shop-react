import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Store } from '../redux/types';
import { ListTypes, switchView } from '../redux/viewReducer';
import { RootState } from '../store';

type Props = {
  store?: Store,
}

const Header = ({ store }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listView = useSelector<RootState, string>(state => state.view.list);

  const listIcon = listView === ListTypes.Grid ? 'view-list' : 'grid-3x3-gap-fill';
  const home = () => navigate('/');
  const viewSwitch = () => {
    dispatch(switchView());
    navigate('/');
  };

  return (
    <div className='header'>
      <div className='header__left' onClick={ home }>
        <div className='header__logo'><img src={ Logo } alt='' /></div>
        <div className='header__title'>{store?.name}</div>
      </div>
      <div className='header__right'>
        <button className='header__button' onClick={ () => navigate('/products/new') } title='Add Product'>
          <i className='bi bi-plus-circle-fill' />
          {' '}
          <span>Add</span>
        </button>
        <button
          title='Switch view'
          className='header__button switch-view'
          onClick={ viewSwitch }
        >
          <i className={ `bi bi-${ listIcon } switch` } />
        </button>
        <button
          title='Statistics'
          className='header__button'
          onClick={ () => navigate('/statistics') }
        >
          <i className='bi bi-pie-chart' />
        </button>
      </div>
    </div>
  );
};

export default Header;
