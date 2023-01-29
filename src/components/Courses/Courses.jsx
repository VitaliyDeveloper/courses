// import poster from '../../img/fotoapparat.jpg';
import CourseCard from 'components/CourseCard/CourseCard';

//STYLES////////////////////////////
import { CoursesList } from './Courses.styled';

const Courses = ({ bd }) => {
  console.log(bd);
  return (
    <CoursesList>
      {bd.map(course => (
        <CourseCard course={course} key={course.id} />
      ))}
    </CoursesList>
  );
};

export default Courses;
