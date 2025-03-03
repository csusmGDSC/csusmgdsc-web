## Making your contribution

Welcome! I'm glad to hear your interest in improving the GDSC platform as a software developer. Here are some quick things to recognize before getting started,

1. You need some experience with React, TypeScript, and TailwindCSS
2. Install git and have a github account. You can install [git](https://git-scm.com/downloads)
3. All your changes should be relating to fixing a issue through GitHub issues
4. You should always be on a separate branch from "main"

## Getting Started With Local Development

First, make sure you have nodeJS installed, this is vital in running the application.

You can check if you have nodeJS installed by running the command in your terminal (windows, mac, or linux),

```bash
node -v
```

If you don't have node installed, you can download Node-Version-Manager [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to install and manage node versions.

## Cloning the code onto your computer

Now that you have node installed, clone the repository into your local machine by the following.

1. Create a new folder and store it where you would save your projects
2. Open that folder in an IDE (i.e., VSCode)
3. Open a terminal and run the following commands

```bash
cd path-to-project
git clone https://github.com/csusmGDSC/csusmgdsc-web
```

4. Then try to install and run the project

```
npm install
npm run dev
```

## Making changes

Start making your changes by following instructions from an issue you decided to work on. Always make sure you're on a separate git branch from main to avoid pushing your changes directly to the main branch.

You can change the branch by the following

```bash
git checkout -b new-branch-name
git branch --show-curent
```

If you accidentally made changes on the main branch, you can move those changes to a new branch by doing the following,

```bash
git stash
git checkout -b new-branch-name
git branch --show-curent
git stash apply
```

## Testing

Tests are run using [https://vitest.dev/](https://vitest.dev/) and help make sure the website runs as expected. You can manually run all the frontend tests using the command,

```bash
npm run test
```

Tests are automatically ran when you push a new commit to the repository, and is also part of the CI/CD pipeline through github actions.
