# Restaurant Website Boilerplate

Template: [Eatery][eatery]

### Instructions:

1. Installation: `npm install`
2. Create .env, set up environmental variables (e.g. PORT=8080)
3. Run in development mode: `npm run dev`
4. Run in production mode: `npm start`

### Structure

```
├── config
├── public
    ├── css
    ├── fonts
    ├── img
    ├── js
    ├── scss
├── server
    ├── controllers
    ├── utils
    ├── validation      // validation logic
    ├── views           // pug files
        └── partials
    ├── app.js          // server
├── .env                // (PORT, SERVICE, EMAIL, PASSWORD)
├── .gitignore
├── package.json
├── README.md
```

### Todo

- [x] Update all packages, remove unused
- [x] Add contact form validation
- [x] Add sending emails feature (naver or google)
- [ ] 'Pugify' the rest of the pages
- [ ] Add SEO
- [ ] Deploy, test in production

[eatery]: https://colorlib.com/wp/template/eatery/
