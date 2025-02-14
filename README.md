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

+ I used verion 1.77.6 for Bootstrap SASS as I have experienced a few bugs in the recent past with the latest version. I found several recommendations online to use v1.77.6 as it appears to be more stable.

+ At the time of learning React Router, v6.4 was recommended as the latest stable version which I have used ever since.

## Potential improvements if given more time

Given time, there are a number of improvements I would make:

+ Populate the mini-basket with the last product of the basket array and add a message should it be empty. I too, would trigger the basket to display upon clicking the 'Add to Basket' CTA.
+ Fix the 'type' bug found within the Product Listing & Product pages (I was unable to deploy to Vercel due to this issue, unfortunately). As the pages appeared to work, I felt it was necessary to address it later in order to create the Context & Basket layout.
+ Add a method to update the item cost upon updating the quantity (Basket Page).
+ Add the basket total
+ Add at least one unit test and one integration test - unfortunately, I have no past experience of doing this. It is something I intend to look into at a later date.
+ Optimise for load speed and performance