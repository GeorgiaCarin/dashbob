import logo from '../../assets/logo/rmv logo CMYK-04.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const Header = () => {
    return (
        <div className="bg-primary-green w-full p-4 flex justify-between items-center">
            <img className='w-auto h-12' src={logo} alt='logo' />
            <AccountCircleIcon 
                fontSize='large'
                sx={{
                    fontSize: '48px',
                    color: '#002838'
                }} 
            />
        </div>
    )

}