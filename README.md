# W08D02

## sample account API
this API is simple register and log in API 

## Features 
create role.
display all roles in database.
create new user.
log in by eamil and password

## used library
- express 
- cors
- morgan
- dotenv
- mongoose
- bcrypt
- jsonwebtoken

## routers
- post(/createrole) to create new role
- get(/getrole) to get all roles
- post(/register) to create new user
- post(/login) to log in by useing email and password

## database models
```
const roles = new mongoose.Schema({
  role: { type: String, required: true },
  permissions: { type: Array, required: true },
});

const users = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Roles" },
});
```