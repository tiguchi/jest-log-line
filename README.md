Project for reproducing a `next/jest` bug that modifies and breaks the Jest unit test result output. 

# Reproduction Steps

Run `npm test` and see `output.json` in project base directory.

- `jest.config.js` is set up with `next/jest` configuration extension, which causes the problem 
- When jest is started with `--json` flag then it's stdout output starts with a Jest log line which breaks the JSON syntax
