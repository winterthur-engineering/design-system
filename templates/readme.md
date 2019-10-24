# Netcommunity Templates

## Changes

There are few changes that we're going to do to how templates are made.

1. We're going to get rid of the distinction between a `1-column` and a `2-column` template. Every template that we create will work off of the same basic markup. We're going to call this a `base-template`.
2. We're going to create the concept of `sub-templates` that will be wrapped in the `base-template` to ensure that we can create some consistency between variations of a template
3. We're going to create some rules (listed below) on when each template should be used
4. Each template is going to be responsive out of the box. That means that we should be able to use the same templates and stylesheets 1 time

## Base Template

All of the templates should be managed through some form of source control. This repository is intended to be a basis for that.

```txt
navigation
  social-navigation
  header-navigation
  secondary-navigation
content
  -- sub-templates here --
footer
  links
  address

```

## "New Member" Sub Templates

### `renew`

```txt
base-template
  header
    title
    sub-title
    image (each image should be distinct. no 2 templates should have the same image)
      caption
  body
    -- net-community-member-form --
base-template
```

#### Questions

- What are the items that you typically like to show for a renewal
- Are there any time limits on renewals that we should always show?

### `promotion`

```txt
base-template
  header
    title
    sub-title
    image (each image should be distinct. no 2 templates should have the same image)
      caption
  body
    -- net-community-member-form --
base-template
```

#### Questions

- What are the items that you typically like to show for a promotion?
- How important are pictures

### `standard`

```txt
base-template
  header
    title
    sub-title
    image (each image should be distinct. no 2 templates should have the same image)
      caption
  body
    -- net-community-member-form --
base-template
```

#### Questions

- What are the items that you typically like to show for a promotion?
