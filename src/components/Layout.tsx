import { Box, AppBar, Toolbar, IconButton, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Email />, href: 'mailto:design.engineer.ahmadjmal@gmail.com', label: 'Email' },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={trigger ? 24 : 0}
        sx={{
          px: { xs: 2, md: 6 },
          py: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end', gap: 4 }}>
          <Box
            component="nav"
            sx={{
              display: 'flex',
              gap: 3,
              '& a': {
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontFamily: '"Fira Code", monospace',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: -4,
                  left: 0,
                  background: 'linear-gradient(90deg, #00D8FF, transparent)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'right',
                  transition: 'transform 0.3s ease',
                },
                '&:hover': {
                  color: 'primary.main',
                  '&::before': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                },
              },
            }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                <span style={{ color: '#00D8FF' }}>0{index + 1}.</span> {item.label}
              </motion.a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Fixed social links */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 4,
          zIndex: 10,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 2,
          '&::after': {
            content: '""',
            width: '1px',
            height: '90px',
            background: '#8892B0',
            margin: '0 auto',
          },
        }}
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <IconButton
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              {link.icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>

      {/* Email on right side */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          right: 4,
          zIndex: 10,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 2,
          '&::after': {
            content: '""',
            width: '1px',
            height: '90px',
            background: '#8892B0',
            margin: '0 auto',
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Box
            component="a"
            href="mailto:design.engineer.ahmadjmal@gmail.com"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontFamily: '"Fira Code", monospace',
              writingMode: 'vertical-rl',
              padding: '20px 0',
              letterSpacing: '0.1em',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-3px)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            design.engineer.ahmadjmal@gmail.com
          </Box>
        </motion.div>
      </Box>

      <Box
        component="main"
        sx={{
          pt: { xs: 8, md: 0 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 