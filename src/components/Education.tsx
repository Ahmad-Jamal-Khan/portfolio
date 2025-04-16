import { Box, Typography, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    school: 'Institute of Space Technology',
    degree: 'Bachelor of Science in Avionics Engineering',
    year: '2018 - 2022',
    thesis: 'Thesis: Detection of Heart Beat using a Micromotion Doppler Radar',
    description: 'Relevant coursework: Digital Signal Processing, Communication Systems, Control Systems, Microprocessors, Electromagnetic Theory, Radar Systems, Embedded Systems, Circuit Design, Electronics'
  }
];

const Education = () => {
  return (
    <Box id="education" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{
          color: '#00D8FF',
          mb: 4,
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Education
      </Typography>
      <Timeline position="alternate">
        {education.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {edu.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineDot sx={{ bgcolor: '#00D8FF' }}>
                  <SchoolIcon />
                </TimelineDot>
              </motion.div>
              {index < education.length - 1 && (
                <TimelineConnector sx={{ bgcolor: 'rgba(0, 216, 255, 0.3)' }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography 
                  variant="h6" 
                  component="span" 
                  sx={{ 
                    color: '#00D8FF',
                    fontWeight: 'bold',
                  }}
                >
                  {edu.school}
                </Typography>
                <Typography 
                  variant="subtitle1"
                  sx={{ 
                    color: '#E6F1FF',
                    fontWeight: 'medium',
                    mb: 1,
                  }}
                >
                  {edu.degree}
                </Typography>
                {edu.thesis && (
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: '#E6F1FF',
                      fontStyle: 'italic',
                      mb: 1,
                    }}
                  >
                    {edu.thesis}
                  </Typography>
                )}
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: 'rgba(230, 241, 255, 0.8)',
                  }}
                >
                  {edu.description}
                </Typography>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education; 