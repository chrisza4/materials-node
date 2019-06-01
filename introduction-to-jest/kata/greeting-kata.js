function greeting(person) {
  const persons = Array.isArray(person) ? person : [person];
  const personsSanitizedNull = persons.map(p => (!p ? "my friend" : p));
  const bigPart = personsSanitizedNull.filter(c => isUpperCase(c));
  const smallPart = personsSanitizedNull.filter(c => !isUpperCase(c));
  return [greetingSmall(smallPart), greetingBig(bigPart)]
    .filter(p => p)
    .join(". AND ");
}

function greetingBig(persons) {
  if (!persons || persons.length === 0) return "";
  return `HELLO ${joinGrammaticallyCorrect(persons)}!`;
}

function greetingSmall(persons) {
  if (!persons || persons.length === 0) return "";
  return `Hello, ${joinGrammaticallyCorrect(persons)}`;
}

function joinGrammaticallyCorrect(persons) {
  if (persons.length > 2) {
    const lastPart = persons.slice(persons.length - 1);
    const firstPart = persons.slice(0, persons.length - 1);
    return firstPart.join(", ") + " and " + lastPart[0];
  } else {
    return persons.join(" and ");
  }
}

function isUpperCase(word) {
  if (typeof word !== "string") return false;
  if (!word) return false;
  return word.toUpperCase() === word;
}

module.exports = {
  greeting
};
