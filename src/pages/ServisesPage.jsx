import bdCourses from '../../src/data_base/courses_data.json';
import Courses from 'components/Courses/Courses';

const ServisesPage = () => {
  return <Courses bd={bdCourses.courses} />;
};

export default ServisesPage;
