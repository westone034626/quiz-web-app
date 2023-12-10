import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    return (
        <main className='flex flex-col justify-between items-stretch min-w-[320px] max-w-[1440px] min-h-[100vh] m-auto'>
            <Header />

            <div className='flex-1'>
                <Outlet />
            </div>
        </main>
    );
};

export default Root;