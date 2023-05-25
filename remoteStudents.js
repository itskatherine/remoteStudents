/*
take an array of student objects
some students have a specified location property
our function should return a new array
where all student objects without a location property
now have a location property of "remote"

updateRemoteStudents([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 }
]);
//should return
[
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22, location: 'remote' }
];
*/

const updateRemoteStudents = (array) => {
  const updatedStudents = array.map((student) => {
    const studentCopy = { ...student };
    if (!student.hasOwnProperty("location")) {
      studentCopy.location = "remote";
    }
    return studentCopy;
  });

  return updatedStudents;
};

module.exports = updateRemoteStudents;
