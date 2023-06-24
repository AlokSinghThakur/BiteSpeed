<h1 align="center">Welcome to BiteSpeed 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/chalokoina08" target="_blank">
    <img alt="Twitter: chalokoina08" src="https://img.shields.io/twitter/follow/chalokoina08.svg?style=social" />
  </a>
</p>

> This repository contains the code for a short assignment that I completed for the Backend Developer position at BiteSpeed. The assignment consists of a simple RESTful API se HTTP POST method. The API is implemented using Node.js, Express.js, and MySQL.
><br>
> Please email aloksinghthakurcse@gmail.com if you find any bugs.



### ✨ [Live Link] 
This first iteration will have URIs prefixed with https://bitespeed-b4op.onrender.com and is structured as described below

You can access web service with an endpoint <a><strong>/identify</strong></a> that will receive HTTP POST requests with JSON body of the following format:

```sh
{
	"email"?: string,
	"phoneNumber"?: number
}
```

For example : https://bitespeed-b4op.onrender.com/identify

```javascript
{
	"email": "mcfly@hillvalley.edu",
	"phoneNumber": "123456"
}
```
you'll get output as: 

```javascript
	{
		"contact":{
			"primaryContatctId": 1,
			"emails": ["mcfly@hillvalley.edu"]
			"phoneNumbers": ["123456"]
			"secondaryContactIds": []
		}
	}
```

## Overview
The Designed APIs keeps track of a customer's identity across multiple purchases using email and phonenumber for Bitespeed.It keeps track of the collected contact information in a relational database table named Contact.
{
	id                   Int                   
  phoneNumber          String?
  email                String?
  linkedId             Int? // the ID of another Contact linked to this one
  linkPrecedence       "secondary"|"primary" // "primary" if it's the first Contact in the link
  createdAt            DateTime              
  updatedAt            DateTime              
  deletedAt            DateTime?
}

## Features
1) if there are no existing contacts against an incoming request
The service will simply create a new `Contact` row with `linkPrecedence=”primary"` treating it as a new customer and return it with an empty array for `secondaryContactIds`
   
2) If an incoming request has either of phoneNumber or email common to an existing contact but contains new information, the service will create a “secondary” Contact row.



### Tech Stack Used 
Database : MySQL.
Backend Framework : Nodejs, Expressjs.
ORM: Sequelize.

## Author

👤 **Alok Singh Thakur**

* Website: https://aloksinghthakur.onrender.com/
* Twitter: [@chalokoina08](https://twitter.com/chalokoina08)
* Github: [@AlokSinghThakur](https://github.com/AlokSinghThakur)
* LinkedIn: [@aloksinghthakur](https://linkedin.com/in/aloksinghthakur)

## Link to Resume

* Drive Link : (https://drive.google.com/file/d/18B3W578hAULk6i8HhgtOuptxt0AunP-T/view?usp=drive_link)

## Show your support

Give a ⭐️ if this project helped you!

