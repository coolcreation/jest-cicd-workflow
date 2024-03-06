```yaml
name: Unit Tests

on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy: 
      matrix:
       node-version: [16.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install
      run: npm ci
    - name: tests
      run: npm test

```

### Now commit the workflow items:
git commit -am 'initial workflow for tests'
git push origin my-new-branch
