import * as React from 'react';
import {AspectRatio,IconButton,MoreHoriz} from '@mui/joy/';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function ClassCard({studentCount, courseName, model, courseDescription, courseNote}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width:'100%',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <CardContent>
        <Typography level="title-lg" id="course-name">
          {courseName}
        </Typography>
        <Typography level="title-lg" id="course-description">
          {courseDescription}
        </Typography>
        <Typography level="body-sm" aria-describedby="student-count" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            Students: {studentCount}
          </Link>
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
        <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
           Note: {courseNote}
          </Link>
          </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Model: {model}
        </Chip>
      </CardContent>
    </Card>
  );
}