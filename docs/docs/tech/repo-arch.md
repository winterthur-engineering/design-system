# Repository Architecture

THis document will review the repository at a high level. It will dive into each directory and give a description and purpose of the directory.

## Overview

This repository uses a few core technologies in order to make everything work and quite frankly, automate a lot of the manual tasks we would need in order to publish and host our styleguide, styles, and design system documentation.

Here is a quick summary:

- We use `node` and `npm` to manage our JS packages and run our automated builds
- We use `.scss` or Sass to help ease the writing of our styles
- We import and overwrite `Bootstrap` to manage our styles
- We use `Storybook.js` to create an isolated development environment and test our styles and code out before we add it to NetCommunity.
- We use `markdown` to write our documentation

For information on how to get started with all of this, check out the [Getting Started](./getting-started.md) docs. The next few sections will describe our architecture

## Directory Layout

```
📦winterthur-styleguide
 ┣ 📂.storybook
 ┣ 📂docs
 ┣ 📂src
 ┃ ┣ 📂markup
 ┃ ┗ 📂styles
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜readme.md
```

This is the repository at it's highest level which is the root level. Here there are 2 main directories that you'll probably be working with. Any code that you'll need to work on is located in the `src/` directory. The documents that you are reading right now are contained inside of the `docs/` directory.

### `src/`

Seeing that there are few automated scripts that help aid compilation and style sheet generation, we create a src directory where all of those scripts look to find the code that they need to generate their assets from.

```
📦src
 ┣ 📂markup
 ┃ ┣ 📂00_components
 ┃ ┣ 📂01_parts
 ┃ ┣ 📂02_content
 ┃ ┗ 📂03_templates
 ┗ 📂styles
 ┃ ┣ 📂bootstrap
 ┃ ┣ 📂netcommunity
```

There are 2 main directories inside fo the `src/` directory:

#### `src/markup/`

The markup section contains all of the markup or HTML code that will eventually be placed into NetCommunity. It is broken up into 4 levels of atomic structure where the lowest number represents the smallest parts of the UI and the highest is a combination of all of the lower parts. If you have any questions on atomic structure, check out this resource: [Atomic Design Methodology by Brad Frost](http://atomicdesign.bradfrost.com/chapter-2/);

#### `src/styles`

The styles directory contains all of the styles that give the code in the markup directory it's style. It tells the nodes what to look like, how to respond, and where to position themselves in the UI.

Due to the complexity of the designs that we needed to interface, this directory is broken out into a few sub directories. For a deeper dive into the styles, check out the [Style Architecture documentation](./style-arch.md);

### `docs/`

Naturally, all documentation should be placed inside of the docs folder. However, there are few things to note about the docs directory.

```
📦docs
 ┣ 📂docs
 ┃ ┣ 📂images
 ┃ ┣ 📂system
 ┃ ┣ 📂tech
 ┣ 📂styleguide
 ┣ 📂styles
 ┗ 📜readme.md
```

There are two automatically generated directories: `styleguide` and `styles`. Anytime the build scripts are run, these two directories are populated automatically. The styleguide contains the storybook build assets for the live styleguide. The styles directory contains the generated css file from the `.scss` files that we write our styles in.

All of the markdown documents that you are reading are segregated into 2 directories under the `docs/docs/` directory. If you are writing technical documentation about the repository (build scripts, code standards, etc...), those should be housed in `docs/docs/tech`. Anytime you are writing documentation for the use of code in NetCommunity, you should write and house those docs inside of the `docs/docs/system` folder.

### `./storybook`

This directory is hidden directory that maintains all of the code that helps run, regulate, and build the styleguide. You shouldn't have to do too much in this directory as that it has all been pre-configured for you.

But if you should have any questions, [you can check out the documentation here](https://storybook.js.org/docs/guides/guide-html/). Be warned though that there are some advanced configuration concepts in here including a required deep knowledge of Webpack so proceed with caution.
