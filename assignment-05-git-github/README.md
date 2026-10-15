# Practical 5: Git Version Control & GitHub Repository Integration

## 1. Aim
To create a local Git repository, connect it to a remote GitHub repository, stage and commit project files, and upload (push) the changes using standard Git command-line instructions.

---

## 2. Software & Tools Required
- **Version Control System:** Git CLI (Command Line Interface)
- **Remote Hosting Service:** GitHub (Cloud Git Repository)
- **Terminal:** PowerShell / Command Prompt / Git Bash
- **Editor:** Visual Studio Code / Antigravity IDE

---

## 3. Theory in Simple Words

### What is Git?
Git is a **Distributed Version Control System (DVCS)** that tracks changes in source code files over time. It allows developers to revert to previous versions, compare changes, collaborate without conflicts, and keep a complete historical record of project development.

### The Three States of Git
1. **Working Directory:** The actual local folder on your computer where you write and edit code files.
2. **Staging Area (Index):** A staging zone where files are prepared and marked to be included in the next commit using `git add`.
3. **Local Repository:** The `.git` database where Git permanently stores compressed snapshots of committed project states.
4. **Remote Repository (GitHub):** An online cloud host (like GitHub) that stores copies of the repository so work can be shared, backed up, and accessed from anywhere.

---

## 4. Key Git Commands Explained

| Command | Purpose |
| :--- | :--- |
| `git init` | Initializes a brand new, empty local Git repository in the current directory (creates hidden `.git` folder). |
| `git status` | Displays the working tree status: shows which files are untracked, modified, or staged. |
| `git add <file>` / `git add .` | Adds file(s) from the working directory into the staging area (index) ready for commit. |
| `git commit -m "message"` | Records a snapshot of staged changes to the local repository with a descriptive message and timestamp. |
| `git branch -M main` | Renames the current branch to `main` (the modern standard default branch name). |
| `git remote add origin <url>` | Links the local repository to a remote repository URL hosted on GitHub under the alias `origin`. |
| `git remote -v` | Lists all configured remote repository URLs and their aliases. |
| `git push -u origin main` | Pushes (uploads) local commits to the remote `main` branch and sets up tracking (`-u`). |
| `git log --oneline` | Displays commit history in a clean, concise single-line format showing commit hash and title. |
| `git pull origin main` | Fetches changes from GitHub and merges them directly into your current local branch. |

---

## 5. Step-by-Step Procedure

1. **Verify Git Installation:**
   ```bash
   git --version
   ```
2. **Configure Identity (One-Time Setup):**
   ```bash
   git config --global user.name "Shrinivas Vadje"
   git config --global user.email "shrip4072@gmail.com"
   ```
3. **Initialize Local Repository:**
   ```bash
   cd c:\Users\SHRINIVAS\OneDrive\VSEC
   git init
   ```
4. **Inspect Status of Workspace Files:**
   ```bash
   git status
   ```
5. **Connect to Remote GitHub Repository:**
   ```bash
   git remote add origin https://github.com/ShrinivasVadje/80_A3_Assignment.git
   git remote -v
   ```
6. **Fetch and Align with Remote Branch:**
   ```bash
   git fetch origin
   git branch -M main
   ```
7. **Stage Files for Submission:**
   ```bash
   git add .
   ```
8. **Commit Changes with a Clear Message:**
   ```bash
   git commit -m "Add practical assignments with documentation and root README"
   ```
9. **Push Commits to Remote GitHub Repository:**
   ```bash
   git push -u origin main
   ```
10. **Verify the Pushed Commit History:**
    ```bash
    git log --oneline
    ```

---

## 6. Live Execution Verification & Output

- **Remote GitHub Repository:** [https://github.com/ShrinivasVadje/80_A3_Assignment](https://github.com/ShrinivasVadje/80_A3_Assignment)
- **Active Branch:** `main`
- **Verified Commit Log:**
  ```text
  5d1c01c Add practical assignments 1 to 4 with documentation and update root README
  cc33091 Organize Assignment 1 into folder
  d85872f Merge branch 'main' of https://github.com/ShrinivasVadje/assignment
  617d6dd Add portfolio website
  9fc152d Initial commit
  ```
- **Remote Verification:**
  ```text
  5d1c01cfa85690d53991aa6c64e92547088c70b7  refs/heads/main
  On branch main
  Your branch is up to date with 'origin/main'.
  nothing to commit, working tree clean
  ```

---

## 7. Result
The local repository was successfully created, connected to GitHub, and synced with verified commit history preserving both the original August 2026 commits and the new practical submissions.

---

## 8. Viva Questions & Answers

**Q1: What is the difference between Git and GitHub?**  
*Answer:* Git is an open-source command-line tool installed locally to track code changes. GitHub is a cloud-based web service that hosts Git repositories online for backup, collaboration, and sharing.

**Q2: What is the purpose of the staging area in Git?**  
*Answer:* The staging area (index) acts as a preview area where you can selectively choose and organize which file modifications should be bundled together into the next commit, rather than committing every change at once.

**Q3: What does the command `git push -u origin main` do?**  
*Answer:* It pushes local commits from the `main` branch to the `origin` remote on GitHub. The `-u` flag sets the upstream reference so that future `git push` or `git pull` commands work without specifying the remote and branch names.

**Q4: What is the purpose of a `.gitignore` file?**  
*Answer:* A `.gitignore` file specifies intentionally untracked files that Git should ignore, such as `node_modules/`, secret `.env` configuration files, and temporary build outputs.

**Q5: What is the difference between `git fetch` and `git pull`?**  
*Answer:* `git fetch` downloads commits, files, and refs from the remote repository into your local `.git` database without modifying your working files. `git pull` does a `git fetch` immediately followed by a `git merge` into your current branch.
