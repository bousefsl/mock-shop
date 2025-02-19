# Mock Shop

## Project overview

The task was to build a functional, responsive e-commerce product page with a persistent mini-basket using data from https://mock.shop/.

### Key Features

**1. Product Page:**

+ Display product image, title, description, and price.
+ Include an "Add to Basket" button.

**2. Mini Basket:**

+ Add products to the mini basket.
+ View mini basket from any page (persistent across routes).
+ Update quantity of items in the basket.
+ Remove items from the basket.
+ Display total basket value.

**3. Navigation:**

+ Add a simple navigation bar to simulate a multi-page app (e.g. Home, Products, About).
+ Ensure the mini-basket persists across page navigation.

## Setup instructions

The project has been built with Vite, to install:

`npm install -D vite`

It uses Bootstrap SASS, to install:

`npm install sass@1.77.6` & `npm install bootstrap`

And uses React Router v6.4, to install:

`npm install react-router-dom@6.4`

## Technical decisions and reasoning

+ I used verion 1.77.6 for Bootstrap SASS as I have experienced a few bugs in the recent past with the latest version. Having explored online, it appeared v1.77.6 was recommended to use due to being more stable plus I have used it before with no notable issues.

+ At the time of learning React Router, v6.4 was recommended as the latest stable version which I have used ever since.

## Potential improvements if given more time

Given time, there are a number of improvements I would make:

+ Add at least one unit test and one integration test - unfortunately, I have no past experience of doing this. It is something I intend to look into at a later date.
+ Optimise for load speed and performance
+ Animate the mini-basket to make it more visually appealing, plus, I'd explore a better way to implement it so the window may be dismissed when clicking elsewhere on the site.
+ I would like to extend the product page to incorporate other areas the mock.shop API offers, for instance, variants (e.g colours), collections and a "You may also like section".
+ Simply make it look a lot better in appearance