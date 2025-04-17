import Link from 'next/link';
import { IconButton } from './index'
import GithubIcon from '@mui/icons-material/Github';
import YoutubeIcon from '@mui/icons-material/Youtube';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return(
        <div className="flex h-full justify-center items-center flex-col">
            <div>
                <IconButton
                    component="a"
                    href="https://github.com/ohmbada"
                    target='_blank'
                    variant="outlined"
                    color="primary"
                >
                    <GithubIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://youtube.com"
                    target='_blank'
                    variant="outlined"
                    color="primary"
                >
                    <YoutubeIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="mailto:ohmbada@gmail.com"
                    target='_blank'
                    variant="outlined"
                    color="primary"
                >
                    <EmailIcon />
                </IconButton>
            </div>
            <div className="h-5">
                Copyrigt 2025. ohmbada all rigts reserved.
            </div>
        </div>
    )
}

export default Footer;