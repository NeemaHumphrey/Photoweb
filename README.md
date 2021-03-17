# Requirements
 In this project, you are asked to build a web application of your own. The nature of the application is up to you, subject to a few requirements:
 Your web application must be sufficiently distinct from the other projects in this course
 Your web application must utilize Django (including at least one model) on the back-end and JavaScript on the front-end.
 Your web application must be mobile-responsive.

# PhotoNet
# Purpose
  My idea was to design a visual platform which doesn't rely on text but will allow users to interact by posting their photos, a user will be abble to create an account, search for others account , upload and edit their photos, they will like comment and follow other users by using django and javascript
I believe my final project satisfies the distinctiveness and complexity requirements for several reasons. First of all, it utilizes Django which is including three DJango models on the back-end and JavaScript on the front-end, and is mobile-responsive. Second, it is not based on the old CS50W Pizza project, nor is it a social network/e-commerce site and on top of that this project is a stepping stone to my programming journey because i have always been eager to know how do people post their photos on different platforms so through this project I learned that practically.

# Backend:
  Django framework

# Frontend:
  Javascript
  
  HTML / CSS (Bootstrap )

# Database:
  SQLite
  
# How to run
  Install pillow which adds support for opening, manipulating, and saving images then 
  Make migrations
  
# Files

  Photonet/settings.py - Standard project settings.

  Photonet/urls.py - Routes file for project, which includes paths for album app.

  manage.py - Manager script created by Django.
  
  Photonet/media - File that stores images of all users
  
  album/admin.py - Admin console app configuration file for album app. Not used.
  
  album/apps.py - Application configuration file.

  album/models.py - Standard three models for user, postings images and commenting.
  
  album/urls.py - Routes file for album app.
  
  album/views.py - Views functions for album app.
  
  album/templates/album/index.html - Django template for album Single welcome Page.

  album/templates/album/layout.html - template that contains a bootstrap navbar and a container        so the web site is built as a Single Page Application.

  album/templates/album/welcome.html - registered users will login 

  album/templates/album/register1.html - user registration page.
  
  album/templates/album/user.html - user profile page
  
  album/templates/album/followers/following.html - user followers or following page
  
  album/templates/album/post.html - user's post
  
  album/templates/album/upload.html -  template that will allow user to upload a picture
  
  album/templates/album/search.html - users will be searching for other users
  
  album/templates/album/layout2.html - templates that show post details like likes comments date created author name 
  
  album/templates/album/layout3.html - templates that shows users details 
  
  album/static/album/style.css - CSS stylesheet file for album app 
  
  album/static/album/js/post.js - runs post page template
  
  album/static/album/js/welcome.js - it authenticates user information templates
  
  album/static/album/js/search.js - it verify the searched users
  
  album/static/album/js/upload.js - javascript file that works with upload.html to upload photo
  
  album/static/album/js/user.js - jvascript file that works with user.html for user functionalities
  

  album/migrations/* - Databse migration files created by Django when running makemigrations command




  
  # Demo : https://www.youtube.com/watch?v=L-3YQW9t5RM
