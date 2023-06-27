import { useStoreQuery } from "./redux/storeApi"
import Logo from "../assets/logo.png"

const Header = () => {
  const { data } = useStoreQuery();
  return (
    <div className='header'>
      <div className="header__logo"><img src={ Logo } alt="" /></div>
      <div className='header__title'>{ data?.name }</div>
    </div>
  )
}

export default Header
