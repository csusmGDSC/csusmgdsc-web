---
name: Component Testing
about: Testing the functionality of a react component
title: ''
labels: ''
assignees: ''

---

We need to write unit test cases for the <ComponentName> component in the <FeatureName> feature. The goal of this issue is to ensure that the component functions as expected by testing its rendering, behavior, and edge cases.

Acceptance Criteria
- [ ] Write test cases for all key functionalities of the <ComponentName> component.
- [ ] Ensure the component renders correctly.
- [ ] Test props, state, and any side effects (e.g., events, hooks).
- [ ] Include snapshot testing (if applicable).
- [ ] Ensure tests pass without errors or warnings.

Testing Instructions
- Follow the project build instructions in contributing.md
- Find the component located at src/features/<feature-name>/<component-name>
- Create a new test file __tests__/components/<ComponentName>.tsx
- Implement the test cases as described in the acceptance criteria.
- Run the test suite using ```npm run test``` inside the terminal
- Run the build command using ```npm run build``` inside the terminal to make sure there are no errors
- Ensure that all tests pass before submitting a PR.

Additional Resources
https://vitest.dev/
