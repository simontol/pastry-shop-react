import { useDispatch, useSelector } from 'react-redux';
import { useStoreQuery } from './redux/storeApi';
import Logo from '../assets/logo.png';
import { showModal } from './redux/modalReducer';
import { RootState } from './store';
import { ListTypes, switchView } from './redux/viewReducer';

const Header = () => {
  const dispatch = useDispatch();
  const listView = useSelector<RootState, string>(state => state.view.list);
  const { data } = useStoreQuery();
  const addProduct = () => {
    dispatch(showModal({ show: 'ProductModal', product: null }));
  };

  const listIcon = listView === ListTypes.Grid ? 'view-list' : 'grid-3x3-gap-fill';

  return (
    <div className='header'>
      <div className='header__logo'><img src={Logo} alt='' /></div>
      <div className='header__title'>{data?.name}</div>
      <button className='header__button' onClick={addProduct} title='Add Product'>
        <i className='bi bi-plus-circle-fill' />
        {' '}
        <span>Add</span>
      </button>
      <button
        title='Switch view'
        className='header__button'
        onClick={() => dispatch(switchView())}>
        <i className={`bi bi-${listIcon} switch`} />
      </button>
    </div>
  );
};

export default Header;
