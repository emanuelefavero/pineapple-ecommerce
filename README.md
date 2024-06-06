# Pineapple ecommerce

Pineapple ecommerce is an iPhone ecommerce built with Next.js Sanity and Stripe

## Demo

- [https://pineapple-ecommerce.vercel.app/](https://pineapple-ecommerce.vercel.app/)

#### Screenshot

![screenshot](./screenshot.webp 'screenshot')

&nbsp;

---

&nbsp;

## How to run this project locally

- clone this repo and `cd` into it
- run `npm install` to install all dependencies
- `cd` into the `sanity-pineapple` folder and run `npm install` to install all dependencies

- create a `.env.local` file in the root directory and add the following:

```bash
# SANITY
# Go to the Sanity manage section, open your project and copy the project ID
# @link https://www.sanity.io/manage
NEXT_PUBLIC_SANITY_PROJECT_ID=''
# Go to the API section of your Sanity project, create a new token and copy it
# choose token permissions depending on your needs
# @link https://www.sanity.io/manage
NEXT_PUBLIC_SANITY_TOKEN=''

# STRIPE
# Go to the developers section of your Stripe account and copy the keys
# @see https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=''
NEXT_PUBLIC_STRIPE_SECRET_KEY=''
```

- run `npm run dev` to start Next.js
- open a new terminal tab, `cd` into the `sanity-pineapple` folder and run `npm run dev` to start Sanity Studio
- go to [http://localhost:3000](http://localhost:3000) to see the app
- go to [http://localhost:3333](http://localhost:3333) to see the Sanity Studio and upload content there

> Note: If you instead need to update content in Sanity Studio for the production version, got to [this link](https://emanuelefavero-ecommerce.sanity.studio/desk)

&nbsp;

---

&nbsp;

## How to deploy this project

### Deploy Sanity Studio

- `cd` into the `sanity-pineapple` folder and run `sanity deploy` to deploy the Sanity Studio to the cloud
- choose a name for your Studio hostname (e.g. `pineapple-ecommerce`)
- share the link with your team members or clients

> Note: the link for this project is: [this one](https://pineapple-ecommerce.sanity.studio/)

### Deploy App to Vercel

- add a `.vercelignore` file in the root directory and add the `sanity-pineapple` folder to it to ignore it when deploying to Vercel
- remember to add the following environment variables to Vercel:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_TOKEN
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_STRIPE_SECRET_KEY
```

- add the vercel website url to the Sanity project management dashboard `API > CORS origins > + Add CORS origin`

> Here: [https://www.sanity.io/manage](https://www.sanity.io/manage) (Click on your project name)

&nbsp;

---

&nbsp;

## Resources

- [My ecommerce tutorial repo](https://github.com/emanuelefavero/ecommerce-sanity-stripe#how-to-run-this-project-locally)
- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Stripe](https://stripe.com/)

&nbsp;

## License

- [MIT](LICENSE.md)
