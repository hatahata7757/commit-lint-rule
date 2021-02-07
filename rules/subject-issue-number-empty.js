module.exports = ({ subject, type }, when = 'always') => {
  const negated = when === 'never';
  // disable
  if (negated) {
    return [true];
  }
  const acceptPattern = (/#[0-9]+\s.*/);
  const isMatch = acceptPattern.test(subject);

  return [
    isMatch,
    `The commit message should be in the following format: "${type}: #{issue number} {subject}"`,
  ];
}

