import Logo from "../assets/logo.png"

type Props = {
  loading: boolean;
}

const Loader = ({ loading }: Props) => {
  const className = `loader ${loading ? 'loading' : ''}`
  return (
    <div className={className}><img src={Logo} alt="" /></div>
  )
}

export default Loader
