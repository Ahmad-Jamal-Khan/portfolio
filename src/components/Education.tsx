import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Science in Electrical Engineering',
      university: 'Institute of Space Technology',
      period: '10/09/2018 - 27/07/2022',
      location: 'Islamabad, Pakistan',
      gpa: '3.5/4.0',
      thesis: 'Design and Implementation of a Ground Proximity Warning System',
      courses: [
        'Digital Signal Processing',
        'Communication Systems',
        'Control Systems',
        'Microprocessors',
        'Electromagnetic Theory',
        'Radar Systems',
        'Embedded Systems',
        'Circuit Design',
      ],
    },
  ];

  return (
    <Box
      id="education"
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
          background: 'radial-gradient(circle at 0% 0%, rgba(0, 216, 255, 0.03) 0%, rgba(10, 25, 47, 0) 50%)',
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
              <span style={{ color: theme.palette.primary.main }}>05.</span> Where I Studied
            </Typography>
            <Typography variant="h2">Education</Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                transform: { xs: 'none', md: 'translateX(-50%)' },
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, #00D8FF 0%, rgba(0, 216, 255, 0.1) 100%)',
                zIndex: 0,
              }}
            />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    mb: 8,
                    ml: { xs: 6, md: index % 2 === 0 ? '0' : '50%' },
                    mr: { xs: 0, md: index % 2 === 0 ? '50%' : '0' },
                    pl: { xs: 4, md: index % 2 === 0 ? 0 : 4 },
                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                  }}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -28, md: index % 2 === 0 ? 'auto' : -6 },
                      right: { xs: 'auto', md: index % 2 === 0 ? -6 : 'auto' },
                      top: 8,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      zIndex: 1,
                    }}
                  />

                  <Box
                    sx={{
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
                    <Typography variant="h5" gutterBottom color="primary.main">
                      {edu.degree}
                    </Typography>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      {edu.university}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        fontFamily: '"Fira Code", monospace',
                      }}
                    >
                      {edu.period} | {edu.location} | GPA: {edu.gpa}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      <strong>Thesis:</strong> {edu.thesis}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {edu.courses.map((course, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body1"
                          sx={{
                            mb: 1,
                            '&::marker': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {course}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 