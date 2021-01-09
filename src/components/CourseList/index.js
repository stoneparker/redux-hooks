import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CourseList() {
   const courses = useSelector(state => state.data); // toda vez que a variável data do redux mudar, essa função é executada novamente e teremos os novos cursos em tela.
   const dispatch = useDispatch();

   function addCourse() {
      dispatch({ type: 'ADD_COURSE', title: 'GraphQL' });
   }

   return (
      <>
         <ul>
            { courses.map(course => <li key={course}>{course}</li> )}
         </ul>
         <button type="button" onClick={addCourse}>
            Adicionar curso
         </button>
      </>
   );
}

export default CourseList;