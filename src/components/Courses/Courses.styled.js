import styled from 'styled-components';

export const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CoursesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CoursesItem = styled.li`
  margin: 20px;
  background-color: var(--accent-color);
  width: 200px;
  height: 300px;
`;
