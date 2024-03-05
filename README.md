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

### To Test:

git commit -am 'initial workflow for tests'