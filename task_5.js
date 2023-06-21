/*Напишите функцию, которая вернет строку с именами студентов,
у которых оценка больше 50*/

const students = [
  { name: 'Alex', mark: '76'},
  { name: 'John', mark: '30'},
  { name: 'Smith', mark: '50'},
  { name: 'Bob', mark: '62'},
  { name: 'Sam', mark: '97'},
];

const goodMarks = (students) => {
  const result = [];
  for (student of students) {
    if (Number(student.mark) > 50) {
      result.push(student.name);
    }
  }
  return result.join(', ');
}

console.log(goodMarks(students));