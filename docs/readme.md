![alt text](./docs/images/winterthur-logo.jpg "Logo Title Text 1")

# Winterthur Design System

Welcome to the Winterthur Styleguide! This repository was setup to help align the NetCommunity pages with the rest of the current Winterthur brand, but with a few other things in mind.

This code base is intended to mock what currently exists for RaisersEdge and Wordpress, but also aims to scale the styles better for an eventual change. It also attempts to make style updates and additions easier.

There are 2 main sections below that detail the inner workings of the repository.

## 00. Technical Documentation

### Target Audience

This section (at some points) will get pretty deep in talking about architecture, styles, and then deployments, so if you want to limit the scope of your focus, I would suggest reading onto the next section.

| Audience         | Requirements                                              |
| ---------------- | --------------------------------------------------------- |
| Technical people | Working knowledge of HTML, CSS, Sass, JavaScript, and NPM |

### Overview

This section of the documentation reviews how the styles have been setup and how they be edited, utilized, and scaled for future development.

### Documentation

Click on the links below for the documentation

#### Architecture

- [Repository Architecture](./docs/tech/repo-arch.md) - Reviews how this repository is setup and layed out. Dives into the different folder structures and essentially displays where to find things
- [Style Architecture](./docs/tech/style-arch.md) - Reviews how the styles are layed out and what is being derived from where

#### Developing

- [Using the development environment](./docs/tech/developing.md) - Details how to go about editing styles using the live sandbox environment
- [Overriding NetCommunity defaults](./docs/tech/overriding-nc.md) - Shows how to override the default styles that NetCommunity provides
- [Overriding Bootstrap defaults](./docs/tech/overriding-bootstrap.md) - Shows how to override the default styles that bootstrap provides
- [Upgrading dependencies](./docs/tech/upgrade-dependencies.md) - Details how to upgrade bootstrap and other project dependencies to new versions

#### Deployment

- [Deploying the style change & docs](./docs/tech/deployment.md) - Shows you how to get your changes in both the styles and documentation updated in the hosted environment

## 01. Functional Documentation (NetCommunity)

### Overview

This section is going to review anything that has to do with **implementing** what has been created in the technical section. It will go through how to use some of the things that have been created in the previous section and implement them in NetCommunity.

### Target Audience

| Audience      | Requirements                                  |
| ------------- | --------------------------------------------- |
| Page Creators | Working knowledge of basic NetCommunity parts |

This section is for anybody who is actually going to be creating the pages and using the NetCommunity system for page creation. It differs in the sense that you won't be **_developing_** the pieces needed, but instead, you'll be **_implementing_** the pieces

### Documentation & Tutorials

Click on the links below for the documentation

#### Styleguide

- [Styleguide](./styleguide/index.html) - View the interactive styleguide
- [Understanding the styleguide](./docs/system/understand-styleguide.md) - Helps you understand the styleguide and how to read and use it

#### Architecture (review this first)

- [Anatomy of a page](./docs/system/page-anatomy.md) - Details the different parts of a page
- [NetCommunity layout](./docs/system/nc-layout.md) - Shows how NetCommunity is organized and setup
- [Parts](./docs/system/parts.md) - Dives deeper into `Base` and `System` parts and how to use them
- [Templates](./docs/system/templates.md) - Details the anatomy of a template

#### Tutorials (Videos)

- [Create a new page from scratch](./docs/system/create-a-new-page.md) - How to go about creating pages from the ground up
- [Create a new page from a template](./docs/system/create-a-new-page-from-existing.md) - How to create a page by using a template
- [Create a new base part](./docs/system/create-a-new-base-part.md) - How to create a new part that will be common in all of the pages
- [Create a new template](./docs/system/create-a-new-template.md) - Create a new template to be used for easier page creation
- [Create a new layout](./docs/system/create-a-new-layout.md) - Shows how to create a new layout
- [Adding content to a page](./docs/system/add-content-to-a-page.md) - Shows how to add new content to a page using the content components from the styleguide
