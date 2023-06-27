import { useStoreQuery } from "./store/storeApi"
import Logo from "../assets/logo.png"

const Header = () => {
  const { data, isLoading } = useStoreQuery();
  return (
    <div className='header'>
      <div className="header__logo"><img src={ Logo } alt="" /></div>
      <div className='header__title'>{ data?.name }</div>
    </div>
  )
}

export default Header
