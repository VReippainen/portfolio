This is a static site generator (SSG), which can be used for creating porfolio website. Example website can be found on [reippainen.com](https://reippainen.com). The SSG is implemented using Next.js and Typescript, uses Contenful as its CMS and the example website itself is hosted on Netlify.

## Getting Started

Before starting, set Contentful access token, space id and the website id as environment variables, which can be found on Contenful. The easiest way to set environment variables is to create .env.local file (template below):

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=EXAMPLE_SPACE_ID
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=EXAMPLE_ACCESS_TOKEN
WEBSITE_ID=EXAMPLE_WEBSITE_ID
```

After settings the environment variables, the development server can be started by running:

```bash
yarn install
yarn run dev
```

The development server is running now on [http://localhost:3000](http://localhost:3000)

You may also try running the server on production mode:

```bash
yarn build
yarn export
# Serve must be installed globally
serve -s out
```

The server should now be running on [http://localhost:5000](http://localhost:5000)

## Deploy on Netlify

Deploying example portfolio website can be done by merging a pull request to main branch. Netlify will deploy new changes automatically after PR is accepted.
