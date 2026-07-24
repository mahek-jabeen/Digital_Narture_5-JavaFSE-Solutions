# Git Branching and Merging Hands-on

## Overview

This hands-on helped me understand how branching and merging work in Git. I learned how to create a new branch, make changes independently, compare the changes with the main branch, merge them back, and remove the branch after the merge. This workflow is commonly used by developers to work on new features without affecting the main project.

## What I Did

- Created a new branch named `GitNewBranch`.
- Listed all local and remote branches.
- Switched to the new branch.
- Created a new folder for the branching exercise.
- Added sample files and committed the changes.
- Switched back to the `main` branch.
- Compared the differences between the branches using Git.
- Merged the branch into the `main` branch.
- Viewed the commit history after merging.
- Deleted the merged branch.
- Pushed the updated repository to GitHub.

## Commands Used

### Check the current branch

```bash
git branch
```

### Create a new branch

```bash
git branch GitNewBranch
```

### List all local and remote branches

```bash
git branch -a
```

### Switch to the new branch

```bash
git checkout GitNewBranch
```

### Create the exercise folder

```bash
mkdir -p Deep_Skilling_Modules/Git/GitBranching
```

### Navigate to the folder

```bash
cd Deep_Skilling_Modules/Git/GitBranching
```

### Create sample files

```bash
echo "Git Branching and Merging Hands-on" > branch_demo.txt
```

```bash
echo "# Branching Exercise" > README.md
```

### Return to the repository root

```bash
cd ../../..
```

### Check repository status

```bash
git status
```

### Stage the changes

```bash
git add .
```

### Commit the changes

```bash
git commit -m "Added GitBranching hands-on files"
```

### Switch back to the main branch

```bash
git checkout main
```

### Compare both branches

```bash
git diff main GitNewBranch
```

### (Optional) Visual comparison using P4Merge

```bash
git difftool main GitNewBranch
```

### Merge the branch

```bash
git merge GitNewBranch
```

### View the commit history

```bash
git log --oneline --graph --decorate
```

### Delete the merged branch

```bash
git branch -d GitNewBranch
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
    └── GitBranching
        ├── README.md
        └── branch_demo.txt
```

## What I Learned

This exercise gave me a practical understanding of Git branching and merging. I learned how to work on a separate branch without affecting the main branch, compare changes before merging, and combine completed work back into the main branch. I also understood the importance of keeping the repository organized by deleting branches that are no longer needed after a successful merge.