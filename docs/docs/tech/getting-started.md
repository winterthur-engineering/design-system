# Getting Started

This document will help you get your development environment up and running so you can create styles and new content

## Process

Follow the process below to get started. If none of it makes sense to you, try to replicate the actions in this video

### 1. Download `node` and `npm`

```
node -v
```

If you get a version, then you're set, but if you don't you can download node using one of the following:

- NodeJs website
- Homebrew
- Curl

If you don't want to mess with any other package managers, you can just go to their website and [download the LTS (Long Term Support) version](https://nodejs.org/en/download/)

Ensure you also have npm installed by running the below command

```
npm -v
```

### 2. Clone the repository

Once you get node installed, you can clone the repository.

Navigate to the link here: https://github.com/winterthur-engineering/design-system and use the clone command to download the repository code

```
git clone git@github.com:winterthur-engineering/design-system.git
```

### 3. Download all of the dependencies

Change into the directory and download all of the dependencies using `npm`

```
cd winterthur-design-system
npm install
```

You can do this in a code editor of your choice, but I would suggest VSCode as that it has great out of the box support for JavaScript, Node, Npm, and Sass

### 4. Start the solution

Once npm has finished install all of the packages, you can start the development environment:

```
npm run dev
```

This should get storybook running and compiling for you. Once it finishes compiling it will open up a window and you'll be able to start developing, saving and then seeing your changes live.

## Video walkthorugh
