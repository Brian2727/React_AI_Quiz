import './Header.css';
import {useAuth} from "./components/Context/AuthContext";

function Header() {
    const {user} = useAuth();
    console.log(user);
  return (
    <header className='app-header'>
      <img src='logo512.png' alt='React logo' className='logo-animation' />
      <div className="title-wrapper">
        <h1 className='title-slide'>Artificial Intelligence Quiz</h1>
        <div className="underline"></div>
      </div>
    </header>
  );
}

export default Header;