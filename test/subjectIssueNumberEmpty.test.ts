import type { Commit, RuleConfigCondition } from '@commitlint/types'
import subjectIssueNumberEmptyRule from '../src/rules/subjectIssueNumberEmpty'

const when: RuleConfigCondition = 'always'

test('should return error message if commit start without hash tag', () => {
  const value = subjectIssueNumberEmptyRule(
    { raw: 'test(scope): test' } as Commit,
    when,
  )

  expect(value).toEqual([
    false,
    'Your commit message should include issue number, please check the your commit message.',
  ])
})

describe('The commit contains a hashtag', () => {
  // Issue番号が数字以外の時にエラーメッセージを変える必要あり？
  it('Issue number contains a non-numeric value.', () => {
    const value = subjectIssueNumberEmptyRule(
      { raw: 'test(scope): #hoge test' } as Commit,
      when,
    )

    expect(value).toEqual([
      false,
      'Your commit message should include issue number, please check the your commit message.',
    ])
  })

  it('should pass when return right commit message code.', () => {
    const value = subjectIssueNumberEmptyRule(
      { raw: 'test(scope): #1 test' } as Commit,
      when,
    )
    expect(value).toEqual([true, 'passed'])
  })
})
