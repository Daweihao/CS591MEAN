

#README

This is homework 5 repo.  I use Angular 2 as frontend, express as backend server.

HW5 is partially based on the modifed version of HW3.

I used Google oauth as my authentication.

weather is in http://localhost:4200/home

Users profile are in http://localhost:4200/user

Oath will be navigated to http://localhost:3000/auth/google

callback is http://localhost:4200/home

FrontEnd: http://localhost:4200

Backend: http://localhost:3000

passport.deserialize funtion is implemented in auth.js in HW5 folder.

userController.js is used to implement some db operations.

Hw3/authRoute.js has authenticate and redirect url.

---

### Mongo Db server

A user object is defined in model/user.js

```javascript
email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    }
```

---

Several APIs built for front end: 

 http://localhost:3000/user/  post method will create a instance, get method will show all results in db.

 http://localhost:3000/user/:userid get method will send a record according to its userid.

 http://localhost:3000/user/ put method will update one record only.

http://localhost:3000/user/:userid delete method will delete a record according to its userid.

RouterModule is used for routing to different pages. It is written in app-routing.module.ts.

