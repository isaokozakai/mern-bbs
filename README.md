# sharedlist

This is a bulletin board application with the MERN Stack (**M**ongoDB, **E**xpress, **R**eact, and **N**ode.js).

[DEMO](https://isao-sharedlist.herokuapp.com/)

## Purpose
I wanted to make a social media servis that helps people make friends or find some oppotunities.

## Features
 - You can register by user name, password and email address.
 - You can login with password and email address.
 - You can search articles by a word you specify.
 - Registered users can create articles, and edit and delete them.
 
## Upcoming Features
 - Uploading images
 - Leaving comments on an article
 
 # Data Structure
```
    .
    ├── users
    |     ├── _id
    |     ├── name
    |     ├── email
    |     ├── password
    |     └── registerDate
    └── items
          ├── _id
          ├── title
          ├── description
          ├── postedAt
          ├── updatedAt
          └── user
```
 
 ## Technologies
 - React
 - Redux
 - Node.js
 - Express
 - MongoDB
 - Axios
 - JSON Web Token
 - reactstrap(React Components for Bootstrap 4)
