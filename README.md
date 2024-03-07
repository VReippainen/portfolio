This is a static site generator (SSG), which can be used for creating porfolio website. Example website can be found on [reippainen.com](https://reippainen.com). The SSG is implemented using Next.js and Typescript, uses Contenful as its CMS and the example website itself is hosted on Netlify.

## Getting Started

Before starting, set the Contentful access token, host, space id and the website id as environment variables, which can be found on Contenful. The easiest way to set environment variables is to copy the .env.example file and name it as .env

After setting the environment variables, the development server can be started by running:

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
