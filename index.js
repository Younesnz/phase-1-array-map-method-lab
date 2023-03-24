const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title=>{ // for each title in the array:
    return title.split(" ").map(word=>{ // convert title to an array of words and for each word in this array:
      return word.charAt(0).toUpperCase()+word.slice(1); // capitlize the first letter and add the rest
    }).join(" "); // join them together to create a string
  }) // I know it's a little hard to read but I like the complexity of it :/
}
