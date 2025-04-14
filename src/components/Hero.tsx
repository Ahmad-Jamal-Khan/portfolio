import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 216, 255, 0.1) 0%, rgba(10, 25, 47, 0) 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#00D8FF',
                    fontFamily: '"Fira Code", monospace',
                    mb: 2,
                  }}
                >
                  Hi, my name is
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="h1" sx={{ mb: 2 }}>
                  Ahmad Jamal Khan
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#8892B0',
                    mb: 4,
                  }}
                >
                  I build advanced RF systems.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: '600px',
                    mb: 6,
                  }}
                >
                  I'm an RF Systems Engineer specializing in radar systems, electronic warfare,
                  and signal processing. Currently focused on developing innovative solutions
                  for mission-critical defense applications at Pakistan Air Force.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    href="mailto:design.engineer.ahmadjmal@gmail.com"
                    startIcon={<Email />}
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="https://github.com/yourusername"
                    target="_blank"
                    startIcon={<GitHub />}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    startIcon={<LinkedIn />}
                  >
                    LinkedIn
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Animated background elements */}
        <Box
          component={motion.div}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 216, 255, 0.1) 0%, rgba(10, 25, 47, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />
        <Box
          component={motion.div}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 51, 102, 0.1) 0%, rgba(10, 25, 47, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            zIndex: 0,
          }}
        />
      </Container>
    </Box>
  );
};

export default Hero; 