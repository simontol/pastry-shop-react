import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/logo.png';
import { showModal } from './redux/modalReducer';
import { Store } from './redux/types';
import { ListTypes, switchView } from './redux/viewReducer';
import { RootState } from './store';

type Props = {
  store?: Store,
}

const Header = ({ store }: Props) => {
  const dispatch = useDispatch();
  const listView = useSelector<RootState, string>(state => state.view.list);
  const addProduct = () => {
    dispatch(showModal({ show: 'ProductModal', product: null }));
  };

  const listIcon = listView === ListTypes.Grid ? 'view-list' : 'grid-3x3-gap-fill';

  return (
    <div className='header'>
      <div className='header__logo'><img src={ Logo } alt='' /></div>
      <div className='header__title'>{store?.name}</div>
      <button className='header__button' onClick={ addProduct } title='Add Product'>
        <i className='bi bi-plus-circle-fill' />
        {' '}
        <span>Add</span>
      </button>
      <button
        title='Switch view'
        className='header__button'
        onClick={ () => dispatch(switchView()) }
      >
        <i className={ `bi bi-${ listIcon } switch` } />
      </button>
      <button
        title='Stats'
        className='header__button'
        onClick={ () => dispatch(switchView()) }
      >
        <i className='bi bi-pie-chart' />
      </button>
    </div>
  );
};

export default Header;
