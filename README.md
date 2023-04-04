# Pineapple ecommerce

Pineapple ecommerce is an iPhone ecommerce built with Next.js Sanity and Stripe

> Note: It is still a work in progress

&nbsp;

---

&nbsp;

## How to run this project locally

- clone this repo and `cd` into it
- run `npm install` to install all dependencies

- create a `.env.local` file in the root directory and add the following:

```bash
# SANITY
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
- open a new terminal tab, `cd` into the `sanity-ecommerce` folder and run `npm run dev` to start Sanity Studio
- go to [http://localhost:3000](http://localhost:3000) to see the app
- go to [http://localhost:3333](http://localhost:3333) to see the Sanity Studio and upload content there

> Note: If you instead need to update content in Sanity Studio for the production version, got to [this link](https://emanuelefavero-ecommerce.sanity.studio/desk)

&nbsp;

---

&nbsp;

## Resources

- [My ecommerce tutorial repo](https://github.com/emanuelefavero/ecommerce-sanity-stripe#how-to-run-this-project-locally)
- [Next.js](https://nextjs.org/)
- [Sanity](https://www.sanity.io/)
- [Stripe](https://stripe.com/)

&nbsp;
