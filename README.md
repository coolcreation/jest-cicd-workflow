### Step 1: Sign in to GitHub and Create a New Repository
### Step 2: Initialize a Git Repository

Open Visual Studio Code and either open your existing project folder or create a new one. 
In VS Code, open the integrated terminal and navigate to your project folder.
Initialize a Git repository with the following command:

git init

### Step 3: Add and Commit Your Files

Stage and commit project files:

git add .                         ( stages all the files in your project )

git commit -m "Initial commit"    ( commits your changes with a message )

### Step 4: Connect to Your GitHub Repository

In GitHub repo click the CODE button, and copy the repo URL.

In VS Code connect your local Project to the GitHub repo:

git remote add origin <repository-url>

### Step 5: Push Your Code to GitHub

git push -u origin master

### To Setup a Test Environment:
Make a new branch:
git checkout -b my-new-branch

In VS Code make a new project folder called .github
Now inside .github folder make another folder called "workflows" 
Now inside "workflows" make a new file called "testing.yml"

Inside testing.yml should look like this:


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



### Now commit the workflow items:
git commit -am 'initial workflow for tests'
git push origin my-new-branch


### Now commit the workflow items:
git commit -am 'initial workflow for tests'
git push origin my-new-branch

