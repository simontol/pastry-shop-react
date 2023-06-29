import { useStoreQuery } from "./redux/storeApi"
import Logo from "../assets/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "./redux/modalReducer";
import { RootState } from "./store";
import { switchView } from "./redux/viewReducer";

const Header = () => {
    const dispatch = useDispatch();
    const listView = useSelector<RootState, string>(state => state.view.list);
    const { data } = useStoreQuery();
    const addProduct = () => {
        dispatch(showModal({ show: 'ProductModal', product: null }))
    }

    return (
        <div className='header'>
            <div className='header__logo'><img src={ Logo } alt='' /></div>
            <div className='header__title'>{data?.name}</div>
            <button className='header__button' onClick={ addProduct }><i className='bi bi-patch-plus' /> ADD</button>
            <button className='header__button' onClick={ () => dispatch(switchView()) }>{ listView }</button>
        </div>
    )
}

export default Header
