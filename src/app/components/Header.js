import Link from 'next/link';
import { Button } from './index'
import { IconButton } from './index'
import { SvgIcon } from './index'
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return(
        <div className="flex justify-between items-center h-full">
            <div className='w-5'>

            </div>
            <div className=''>
                <IconButton
                    component={Link}
                    href="/"
                    variant="outlined"
                    color="primary"
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    href="/"
                    variant="outlined"
                    color="primary"
                >
                    <FaceIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    href="/"
                    variant="outlined"
                    color="primary"
                >
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;