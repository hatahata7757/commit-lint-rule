import type { Rule } from '@commitlint/types'

const subjectIssueNumberEmpty: Rule<unknown> = parsed => {
  const { raw } = parsed
  const regex = /#[0-9]+\s.*/

  const result = regex.test(raw)

  let pass
  let errorMsg = 'passed'

  // If don't has Issue number
  if (!result) {
    pass = false
    errorMsg =
      'Your commit message should include issue number, please check the your commit message.'
  } else {
    pass = true
  }

  return [pass, errorMsg]
}

export default subjectIssueNumberEmpty
