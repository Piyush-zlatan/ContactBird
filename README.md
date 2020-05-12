# ContactBird
A simple contact book with usage of Message Bird API which checks if a number is valid or not and store it into Database.

# Overview

MessageBird Api is used in this project. Authentication is implemented using passport-jwt strategy. User cannot add contact without
login/signup. Once the user logs in, a jwt token will be received which will be stored as bearer token for authentication. This further
used to authenticate user to add contact. 

Before adding contact the number is verified by MessageBird API. If it is verified then only it get stored in DB.

## Steps to set up in local Machine

1. git clone https://github.com/Piyush-zlatan/ContactBird.git
2. npm install (To install all the required libraries)
3. npm start (To start the server)

## Params Required
1. For signUp/login
  - mobileNumber
  - password

2. To add contact
  - phoneNumber
  - name


## Routes
1. For signup:
http://localhost:8000/api/v1/auth/signup

2. For login
http://localhost:8000/api/v1/auth/login

3. To add a contact
http://localhost:8000/api/v1/contact/add
