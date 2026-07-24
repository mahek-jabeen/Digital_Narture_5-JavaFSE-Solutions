# Git Ignore Hands-on

## Overview

In this hands-on, I learned how to use the `.gitignore` file to prevent unnecessary files and folders from being tracked by Git. This is useful because some files, such as log files, are generated automatically and do not need to be stored in the repository.

## What I Did

- Created a sample `.log` file in the Git working directory.
- Created a `log` folder containing log files.
- Updated the `.gitignore` file to ignore all `.log` files and the `log` folder.
- Verified that Git no longer tracked these files by checking the repository status.
- Committed the updated `.gitignore` file and pushed the changes to GitHub.

## Commands Used

### Check the repository status

```bash
git status
```

### Create a sample log file

```bash
touch application.log
```

### Create a log folder

```bash
mkdir log
```

### Create a log file inside the folder

```bash
touch log/test.log
```

### Open the `.gitignore` file

```bash
notepad .gitignore
```

### Add the following entries

```text
*.log
log/
```

### Verify ignored files

```bash
git status
```

### Stage the changes

```bash
git add .gitignore
```

### Commit the changes

```bash
git commit -m "Added gitignore rules for log files and log directory"
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
    └── GitDemo
        ├── .gitignore
        ├── README.md
        └── welcome.txt
```

## What I Learned

This exercise helped me understand the purpose of the `.gitignore` file and why it is important in Git projects. By ignoring log files and temporary folders, the repository stays clean and only includes files that are actually required for the project. This makes collaboration easier and avoids committing unnecessary files.