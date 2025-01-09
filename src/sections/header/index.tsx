import { Dropdown, IconButton } from '@mui/joy';
import logo from '../../assets/logo/rmv logo CMYK-04.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuButton, MenuItem } from '@mui/joy';
import { logout } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    return (
        <div className="bg-primary-green w-full p-4 flex justify-between items-center">
            <img className='w-auto h-12' src={logo} alt='logo' />
            <Dropdown>
                <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
                    sx={{borderRadius:48}}
                >
                    <AccountCircleIcon 
                        fontSize='large'
                        sx={{
                            fontSize: '48px',
                            color: '#002838'
                        }} 
                    />
                </MenuButton>
                <Menu
                    variant='solid'
                >
                    <MenuItem onClick={handleLogout}>Sair</MenuItem>
                </Menu>
            </Dropdown>
               

        </div>
    )

}