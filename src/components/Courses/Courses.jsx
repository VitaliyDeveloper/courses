import poster from '../../img/fotoapparat.jpg';

//STYLES////////////////////////////
import { CoursesContainer, CoursesList, CoursesItem } from './Courses.styled';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Courses = () => {
  return (
    <CoursesContainer>
      <Card sx={{ maxWidth: 300, margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Визуал
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Визуал
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Визуал
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CoursesContainer>
  );
};

//   <CoursesList>
//     <CoursesItem>
//       <img src={poster} alt="poster" />
//       <h3>Визуал</h3>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
//         impedit?
//       </p>
//     </CoursesItem>
//     <CoursesItem>
//       <img src={poster} alt="poster" />
//       <h3>Фотосессия</h3>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
//         impedit?
//       </p>
//     </CoursesItem>
//     <CoursesItem>
//       <img src={poster} alt="poster" />
//       <h3>Консультации</h3>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
//         impedit?
//       </p>
//     </CoursesItem>
//   </CoursesList>
//   );
// };

export default Courses;
