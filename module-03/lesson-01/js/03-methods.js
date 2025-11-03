/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */
const course = 'react';
// course[0] = 'R';
const chars = course.split('');
chars[0] = chars[0].toUpperCase();
// console.log('🚀 ~ chars:', chars);
const capitalizedCourse = chars.join('');
// console.log('🚀 ~ capitalizedCourse:', capitalizedCourse);

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// console.log('🚀 ~ courses:', courses);

// const updatedCourses = [...courses]; // spread
// const updatedCourses = Array.from(courses);
// const updatedCourses = courses.slice();
// const updatedCourses = [].concat(courses);
// console.log('🚀 ~ updatedCourses:', updatedCourses);

// const isEqual = courses === updatedCourses;
// console.log('🚀 ~ isEqual:', isEqual);

const someCourses = courses.slice(-2);
// const someCourses = courses.slice(1, courses.length);
// console.log('🚀 ~ someCourses:', someCourses);

const upd = ['Next.js', 'ApoloClient', 'Angular'];
const upd2 = ['Vue.js', 'NoSQL DataBase', 'Algorithms'];
const newCourses = upd.concat(courses, upd2);
// console.table(newCourses);

// console.table(courses);
const elIdx = courses.indexOf('Angular');
// if (elIdx === -1) {
//   console.log('No element');
// }
// console.log('🚀 ~ elIdx:', elIdx);
// console.log(courses[elIdx]);

const deleteItem = newCourses.pop();
// console.log('🚀 ~ deleteItem:', deleteItem);
// newCourses.pop();
// newCourses.pop();
// newCourses.pop();
const addedItem = newCourses.push('Vue.js');
// console.log('🚀 ~ addedItem:', addedItem);
// console.table(newCourses);

const isInCourses = courses.includes('react');
// console.log('🚀 ~ isInCourses:', isInCourses);
