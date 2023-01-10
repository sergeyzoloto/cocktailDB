# cocktailDB

![Welcome Page](repo/welcome.jpg)
![Mobile Version](repo/mobile.jpg)

API module single page app

A Single Page Application interacts with TheCocktailDB API and contains the following routes:

- Homepage. Displays a welcome intro, a search string, and a button “I’m feeling lucky” returning a random cocktail.
- Results page. When a user stops typing, a result list containing drink and ingredient options appears below the search string. Clicking on a cocktail opens a recipe page. Clicking on an ingredient adds filtering.
- Recipe page. Contains a drink image, short info, tags, ingredients, and instructions.

Design reference: <https://www.kahlua.com/en-us/drinks/>

MUST-HAVE:

1. Create the project structure
2. Create a recipe page template
3. Add a random recipe API request handler
4. Add an API request for searching by a cocktail name
5. Add an API request for searching by an ingredient
6. Create a homepage view with a search string
7. Create a result page template
8. Add filtering by an ingredient after choosing one
9. Add filtering by multiple ingredients
10. Add user-friendly loading and error handlers
11. Finalize the design making it responsive
12. Prepare the repository

NICE-TO-HAVE
Additional filters by category and glasses with multiple options choosing allowed

## The project structure description

```text
root
└── public
    └── assets
└── src
    └── api
    └── pages
    └── views
```

- `public` contains styles and static files
  - `assets` contains media files
- `src` contains JavaScript code
  - `pages` contains components of our app defining user interactions per page
  - `api` contains code to communicate with the web
  - `views` contains pure function components only used to render data into DOM elements
  - `app.js` contains the initialization code, simply starts the app
