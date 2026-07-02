function lineUpStudents(students) {
  const names = students.split(" ");

  names.sort((a, b) => b.localeCompare(a));

  names.sort((a, b) => {
    return b.length - a.length;
  });
  return names;
}

const students = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi';
console.log(lineUpStudents(students));