# Git Merge Conflict Resolution Hands-on

## Overview

This hands-on helped me understand how merge conflicts occur in Git and how to resolve them. I learned how different changes made to the same file in separate branches can create conflicts during a merge, and how Git provides tools to resolve them before completing the merge.

## What I Did

- Verified that the `main` branch was in a clean state.
- Created a new branch named `GitWork`.
- Added a `hello.xml` file and committed it in the new branch.
- Switched back to the `main` branch.
- Created another version of `hello.xml` with different content.
- Committed the changes on the `main` branch.
- Compared the differences between both branches.
- Merged the branches and resolved the merge conflict.
- Updated the `.gitignore` file to ignore backup files.
- Deleted the merged branch.
- Viewed the commit history and pushed the changes to GitHub.

## Commands Used

### Check repository status

```bash
git status
```

### Create a new branch

```bash
git branch GitWork
```

### Switch to the new branch

```bash
git checkout GitWork
```

### Create the merge conflict exercise folder

```bash
mkdir -p Deep_Skilling_Modules/Git/GitMergeConflict
```

### Create the hello.xml file

```bash
notepad Deep_Skilling_Modules/Git/GitMergeConflict/hello.xml
```

### Check the repository status

```bash
git status
```

### Stage the changes

```bash
git add .
```

### Commit the changes

```bash
git commit -m "Added hello.xml in GitWork branch"
```

### Switch back to the main branch

```bash
git checkout main
```

### Create another version of hello.xml

```bash
notepad Deep_Skilling_Modules/Git/GitMergeConflict/hello.xml
```

### Stage and commit the changes

```bash
git add .
```

```bash
git commit -m "Added hello.xml in main branch"
```

### View the commit history

```bash
git log --oneline --graph --decorate --all
```

### Compare both branches

```bash
git diff main GitWork
```

### (Optional) Visual comparison using P4Merge

```bash
git difftool main GitWork
```

### Merge the branch

```bash
git merge GitWork
```

### Resolve the merge conflict

Edit the `hello.xml` file, remove the Git conflict markers, save the file, and then run:

```bash
git add Deep_Skilling_Modules/Git/GitMergeConflict/hello.xml
```

```bash
git commit -m "Resolved merge conflict"
```

### Update the .gitignore file

Add the following entry:

```text
*.bak
```

### Commit the updated .gitignore file

```bash
git add .gitignore
```

```bash
git commit -m "Ignore backup files"
```

### List all branches

```bash
git branch
```

### Delete the merged branch

```bash
git branch -d GitWork
```

### View the final commit history

```bash
git log --oneline --graph --decorate
```

### Pull the latest changes

```bash
git pull origin main
```

### Push to GitHub

```bash
git push origin main
```

## Folder Structure

```
Deep_Skilling_Modules
└── Git
    └── GitMergeConflict
        ├── README.md
        └── hello.xml
```

## What I Learned

This exercise helped me understand how Git handles merge conflicts when different changes are made to the same file in separate branches. I learned how to compare changes, identify conflict markers, manually resolve conflicts, and complete the merge successfully. I also understood the importance of keeping the repository clean by ignoring unnecessary backup files using the `.gitignore` file.