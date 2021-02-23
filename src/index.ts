import { Plugin } from '@commitlint/types'
import subjectIssueNumberEmptyRule from './rules/subjectIssueNumberEmpty'

const plugin: Plugin = {
  rules: {
    'subject-issue-number-empty': subjectIssueNumberEmptyRule,
  },
}

export default plugin
