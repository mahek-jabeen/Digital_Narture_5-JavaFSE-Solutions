# Git Basics Hands-on

This hands-on helped me understand the basic Git workflow and how to work with a remote GitHub repository. Instead of creating a separate repository, I completed the exercise inside my existing Deep Skilling repository.

## What I Learned

During this exercise, I learned how to:

- Check whether Git is installed correctly.
- Configure my Git username and email.
- Configure Notepad++ as the default Git editor.
- Create and manage files using Git.
- Check the repository status.
- Stage and commit changes.
- Pull the latest changes from GitHub.
- Push my local commits to the remote repository.

## Commands Used

### Check Git Installation

```bash
git --version
```

### Verify Git Configuration

```bash
git config --global --list
```

### Configure Notepad++ as Default Editor

```bash
git config --global core.editor "notepad++"
git config --global -e
```

### Create the GitDemo Folder

```bash
mkdir -p Deep_Skilling_Modules/Git/GitDemo
```

### Create a Sample File

```bash
echo "Welcome to Git Hands-on" > welcome.txt
```

### Check Repository Status

```bash
git status
```

### Stage Changes

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Added Git hands-on exercise"
```

### Pull Latest Changes

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
        ├── README.md
        └── welcome.txt
```

## Outcome

By completing this hands-on, I gained practical experience with the basic Git workflow. I learned how to track files, commit changes, and synchronize my local repository with GitHub. This exercise also helped me understand how Git manages project history and version control in real-world development.