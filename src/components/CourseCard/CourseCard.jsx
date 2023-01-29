import { CoursesItem, TitleLi, Price, Descp } from './CourseCard.styled';

const CourseCard = ({ course }) => {
  return (
    <>
      <CoursesItem key={course.id}>
        <TitleLi className="hoverColor">{course.title}</TitleLi>
        <Price className="hoverColor">
          {course.price} {course.currency}
        </Price>
        <Descp>{course.description}</Descp>
      </CoursesItem>
    </>
  );
};

export default CourseCard;
