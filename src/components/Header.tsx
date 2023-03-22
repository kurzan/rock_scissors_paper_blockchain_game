import logo from '../images/rpclogo.png';
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Header = () => {
  return(
    <header className="bg-gray-800 py-4 shadow-lg px-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <img src={logo} alt="logo" height="42px" width="64px" />
          <div className="text-gray-300 text-xl font-bold">Камень Ножницы Бумага</div>
        </div>
        <div className="text-gray-300">
          <ConnectButton />
        </div>
      </div>
    </header>
  )
};

export default Header;