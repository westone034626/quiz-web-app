import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const goToHome = () => navigate('/');

    return (
        <div
            onClick={goToHome}
            className='cursor-pointer'
        >
            Header
        </div>
    );
};

export default Header;