function lineUpStudents(students) {
  const namesArray = students.split(" ");

  namesArray.sort((a, b) => b.localeCompare(a));

  namesArray.sort((a, b) => {
    return b.length - a.length;
  });
  return namesArray;
}

const students = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
console.log(lineUpStudents(students));