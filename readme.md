To reproduce:

1. `npm install`
2. `npm run test`

Observe:

```
[41:46.8]  @stencil/core
[41:47.0]  v2.14.2 😃
[41:47.1]  testing spec files
[41:47.2]  jest args: --passWithNoTests --spec --max-workers=8
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /home/george/dev/temp/custom-output-target-example/custom-target-example
  38 files checked.
  testMatch:  - 0 matches
  testPathIgnorePatterns: /home/george/dev/temp/custom-output-target-example/custom-target-example/.vscode, /home/george/dev/temp/custom-output-target-example/custom-target-example/.stencil, /home/george/dev/temp/custom-output-target-example/custom-target-example/node_modules, /home/george/dev/temp/custom-output-target-example/custom-target-example/www, /home/george/dev/temp/custom-output-target-example/custom-target-example/dist - 15 matches
  testRegex: (/__tests__/.*|(\.|/)(test|spec|e2e))\.[jt]sx? - 0 matches
Pattern:  - 0 matches

```
