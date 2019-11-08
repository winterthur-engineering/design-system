# Winterthur Style-guide

## Technical Overview

## Repository Architecture

- bootstrap overrides
- custom overrides of classes
- custom classes

## Styles

### Creating new styles

### Maintaining existing styles

### Deploying changes

## Net Community

### Page Architecture

- anatomy of a page
- folder organization

#### Templates

#### Parts

- Level 1 - BASE PARTS
  **Creating a new base part in NetCommunity**
  - base parts are shared across all templates. Changing them once will change them in every place. So if you create a new page, and you decide to edit the base part, every page will be updated with those changes so make sure. This will help you with maintenance as that if you want to make navigation changes you can do that on a global level instead of having to edit each page on it's own.
  - base parts a fundamental parts of every webpage. Headers, footers, brands, etc... Think of them as components that no matter what kind of content you have ont the page, they will always exist in it. (headers, footers, nav-bars, brands, etc...)
  - base parts should always have the box checked
- Level 2 - CONTENT PARTS
  **Creating a new content part in NetCommunity**

**Part Organization**

Try to keep the folders as flat as possible... so in other words, don't create sub-folders. Doing this enforces a few good practices:

1. Keeping them flat forces you to follow the proper naming conventions
2. Decreases the complexity of where things are located... So you don't run into the instance of "oh crap, where did I put that part". You know... the times when you put something in it's "extra special" place thinking you're going to remember it, but when you go to get it, you actually realize that "extra special" place was like sock drawer or something.

### Creating a new page

- page naming conventions

### Creating a new template

- naming conventions

### Creating a new part

###

#### Templates

#### Parts

### Creating a new page

### Creatina a new template

## Architecture

## Upgrading Bootstrap

## Templates

- 1 base template should always be used when creating a template
  base template has 2 base parts
- Header
- Footer

## Creating a Web Page

Reasons to create a web page

- new campaign

### Anotomy

A page consits of the following:

- template
  - base parts
  - content parts
  - provided parts

### Process

1. Start with a base template (Base, Membership, Donation, GuestPasses)
2. Add the the `content parts` that you want
3. Pick a `net community part` to add. if there isn't one create a new one
4. Save the page in the proper type folder with the name `YYYY_MM - Membership - <Page Name>`

## Creating a Content Part

1. Check the storybook documentation to see if the part exists
2. copy the HTML of the part... son on and so fourth
