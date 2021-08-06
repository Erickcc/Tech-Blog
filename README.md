# Tech-Blog
[![License](https://img.shields.io/badge/license-MIT-green) ](https://img.shields.io/badge/license-MIT-green)

## Description
Simple fullstack blog-like application that allows users to post about topics they want to talk about and comment on each other's posts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Live URL](#live-url)
- [Questions](#questions)

# 
## Installation
In order to be able to run the application locally:

    In the root folder
    1. Create a .env file with the following variables
        DB_USER=<mysql username>
        DB_PW=<mysql password>
        DB_NAME='techblog_db'
    2. npm install
    3. npm run seed
    4. npm start

# 
## Usage
The application in the following manner:

>When the user opens the homescreen of the application, a preview of all the posts is shown to the user along with the user that created each post.
>
>If the user clicks on the post, he is presented with the post and all the comments that were made to that post along with the user who made the comment and a timestamp. If the user is logged in, then he can create a new comment, otherwise this option is not shown.
>
>If the user clicks in the dashboard button, he is taken to his personal dashboard where he gets a quick preview of all the posts he has made. If he clicks a post then he can edit the title and content or delete the post. If the user is logged out then he will be asked to log in before being able to access this menu
>
>If the user clicks on the login button, he can log in with an existing username and password or he can opt to sign up with a new user by clicking the *sign up* button instead

Feel free to use the following test users:
* Noah
* Ava
* James
* Mia

Each of these users have the following password: **12345678**

Overview

![Home page](/public/images/home.JPG "Home page")

![Post Details page](/public/images/commentPost.JPG "Post Details Page")

![Dashboard page](/public/images/dashboard.JPG "Dashboard Page")

![Update post page](/public/images/updatePost.JPG "Update Post Page")

#
## Live URL
* [Tech Blog](https://hidden-atoll-95475.herokuapp.com/)

# 
## Questions
For further inquires, please contact me through Github or E-mail
* [Github profile](https://github.com/Erickcc)
<br>
* <a href="mailto:Erick@erick.com">E-mail</a>
