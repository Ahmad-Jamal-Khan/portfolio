import { Box, AppBar, Toolbar, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-scroll';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navigation = [
    { name: 'About', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/Ahmad-Jamal-Khan' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/ahmad-jamal-khan-jadoon/' },
    { icon: <EmailIcon />, href: 'mailto:engr.ahmadjamalkhan@gmail.com' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                  }}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'white' }}
              >
                {link.icon}
              </motion.a>
            ))}
            <motion.a
              href="/ahmad_jamal_khan.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 216, 255, 0.1)',
                border: '1px solid #00D8FF',
                marginLeft: '1rem',
              }}
            >
              Download Resume
            </motion.a>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 