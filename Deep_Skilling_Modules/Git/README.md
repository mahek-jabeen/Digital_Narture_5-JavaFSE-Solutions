# Git Cleanup and Push to Remote Repository Hands-on

## Overview

This hands-on focused on the final steps of the Git workflow after completing development tasks. I learned how to verify that my local repository was in a clean state, synchronize it with the remote repository, and push my latest changes to GitHub. This process ensures that both local and remote repositories remain up to date.

## What I Did

- Verified that the `main` branch had no pending changes.
- Listed all available local and remote branches.
- Pulled the latest changes from the remote repository.
- Pushed the completed work from the previous hands-on to GitHub.
- Verified that the latest commits were successfully reflected in the remote repository.

## Commands Used

### Check the repository status

```bash
git status
```

### List all local and remote branches

```bash
git branch -a
```

### Switch to the main branch (if required)

```bash
git checkout main
```

### Pull the latest changes from GitHub

```bash
git pull origin main
```

### Push the latest commits to GitHub

```bash
git push origin main
```

### View the commit history

```bash
git log --oneline --graph --decorate
```

## Folder Structure

```
Deep_Skilling_Modules
└── Git
    ├── GitDemo
    ├── GitBranching
    ├── GitMergeConflict
    ├── GitIgnore
    └── README.md
```

## What I Learned

This exercise helped me understand the importance of keeping the local and remote repositories synchronized. I learned how to check the repository status before pushing changes, verify available branches, pull the latest updates from the remote repository, and safely push completed work to GitHub. Following these steps ensures that the project remains up to date and ready for collaboration.