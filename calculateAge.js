function calculateAge(birthYear, relatedYear) {
  const diff = relatedYear - birthYear;

  if (diff == 0) {
    return `You are born this very year!`;
  }

  if (diff > 0) {
    const yearWord = diff === 1 ? "year" : "years";
    return `You are ${diff} ${yearWord}`;
  }

  const yearToBirth = Math.abs(diff);
  const yearWord = yearToBirth === 1 ? "year" : "years";
}

console.log(calculateAge(2001, 2001))