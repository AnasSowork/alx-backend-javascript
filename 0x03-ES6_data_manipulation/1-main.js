import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

console.log(getListStudentIds('hello')); // Should print []
console.log(getListStudentIds(getListStudents())); // Should print [1, 2, 5]
