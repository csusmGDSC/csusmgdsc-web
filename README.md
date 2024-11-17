![gdsc](https://github.com/user-attachments/assets/5c3aa1c0-beed-4981-86d5-ec31304112fc)

## Introduction

This is the repository of the official GDSC-CSUSM community website. This website holds information about events, projects, resources, and membership. It was created with React, TypeScript, and various npm packages.

## Getting Started

First, make sure you have nodeJS installed, this is vital in running the application.

You can check if you have nodeJS installed by running the command in your terminal (windows, mac, or linux),

```bash
node -v
```

If you don't have node installed, you can download (Node-Version-Manager (NVM))[https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/] to install and manage node versions.

## Making changes

If you wish to make changes to the code as a contributor, you will have to start with the making a branch off of the "MAIN" branch (can be named anything). When you are ready to finalize those changes, you can request a pull request to the "MAIN" branch and then one of the administrators will review the changes and go from there.

## Installation

Secondly, once you have NodeJS installed, clone the repository, then install the necessary dependencies by running the command inside your repository,

```bash
npm install
```

Finally, run the development server, the terminal will provide you with a locahost:PORT_NUMBER link to access the website:

```bash
npm run dev
```

## Testing

Tests are run using [https://vitest.dev/](https://vitest.dev/) and help make sure the website runs as expected. You can manually run all the frontend tests using the command,

```bash
npm run test
```

Tests are automatically ran when you push a new commit to the repository, and is also part of the CI/CD pipeline through github actions.

## Tech Stack

This website is using a variety of technologies that is used in modern web development.

- **HTML**: [Markup Language](https://www.w3schools.com/html/)
- **CSS**: [Styling Language](https://www.w3schools.com/css/)
- **TAILWIND CSS** [CSS Framework](https://tailwindcss.com/)
- **TYPESCRIPT**: [Client+Server Language](https://www.typescriptlang.org/)
- **REACT**: [JavaScript GUI Library](https://react.dev/)
- **SHADCN/UI**: [React Component Library](https://ui.shadcn.com/)
- **REACT-ROUTER-DOM**: [Page Routing Library]()
- **REACT-QUERY**: [Data Fetching Library](https://tanstack.com/query/latest/docs/framework/react/overview)
