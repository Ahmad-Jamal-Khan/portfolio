import { Box, Typography, Container, useTheme, Grid, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHub, OpenInNew } from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Remote Sensing of Heart Beat',
      description: 'Developed a system using a micromotion doppler radar for non-contact heart rate monitoring. Implemented signal processing algorithms to extract heart rate from radar data.',
      technologies: ['Radar Technology', 'Signal Processing', 'MATLAB', 'LabVIEW'],
      githubLink: '#',
      liveLink: '#',
      image: '/heart-rate-radar.png',
    },
    {
      title: 'University Exit/Entry System',
      description: 'Created a C++ based access control system for university premises. Implemented database management and user authentication features.',
      technologies: ['C++', 'Database Management', 'SQL', 'Windows Forms'],
      githubLink: '#',
      liveLink: '#',
      image: '/university-access.png',
    },
    {
      title: 'Arduino-based G-Force Measurement',
      description: 'Built a system to measure and analyze gravitational acceleration using Arduino and various sensors. Implemented data logging and real-time visualization.',
      technologies: ['Arduino', 'Sensors', 'Data Analysis', 'C++'],
      githubLink: '#',
      liveLink: '#',
      image: '/g-force.png',
    },
    {
      title: 'Ground Proximity Warning System',
      description: 'Implemented safety systems for aircraft navigation and ground proximity alerts. Developed using PIC-16 and Arduino with various sensors.',
      technologies: ['PIC-16', 'Arduino', 'Sensors', 'Embedded Systems'],
      githubLink: '#',
      liveLink: '#',
      image: '/gpws.png',
    },
    {
      title: 'ATR 42-500 Aircraft Cockpit Modification',
      description: 'Contributed to the redesign and modification of cockpit systems for improved functionality and user experience.',
      technologies: ['Avionics', 'System Design', 'Cockpit Systems', 'Safety Analysis'],
      githubLink: '#',
      liveLink: '#',
      image: '/cockpit-mod.png',
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 100% 50%, rgba(0, 216, 255, 0.03) 0%, rgba(10, 25, 47, 0) 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: '"Fira Code", monospace',
                mb: 2,
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>03.</span> Some Things I've Built
            </Typography>
            <Typography variant="h2">Featured Projects</Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                      gap: 4,
                      p: 3,
                      background: 'rgba(17, 34, 64, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 1,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(45deg, rgba(0, 216, 255, 0.1), rgba(0, 216, 255, 0.05))',
                          zIndex: 1,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Typography variant="h5" color="primary.main">
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(0, 216, 255, 0.1)',
                              color: theme.palette.primary.main,
                              fontFamily: '"Fira Code", monospace',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                        <IconButton
                          component="a"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <GitHub />
                        </IconButton>
                        <IconButton
                          component="a"
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <OpenInNew />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 