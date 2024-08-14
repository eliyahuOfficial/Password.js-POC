# Password.js POC

This is a Proof of Concept (POC) for using `password.js` in a Node.js application with Express. The application provides endpoints for generating, scoring, and ranking passwords. It also includes endpoints for fetching user details and updating user passwords.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd password-poc

3. Install the dependencies:
   npm install


## Running the Application

To run the application in development mode:
   npm run dev

The server will start on `http://localhost:8080`.

## Endpoints

### POST /generate

Generates a new password.

#### Request

{
"length": 12,
"specials": 2,
"nums": 2,
"uppers": 2,
"lowers": 3
}

#### Response

{
"generatedPassword": "generated_password_here"
}

### POST /score

Scores the strength of a given password.

#### Request

{
"password": "password_to_score"
}

#### Response

{
"passwordScore": "score_value"
}

### POST /rank

Ranks the strength of a given password.

#### Request

{
"password": "password_to_rank"
}

#### Response

{
"passwordRank": "rank_value"
}


### GET /user/:id

Fetches details for a user by ID.

#### Request
- No body required.

#### Response

{
"userId": "user_id_here",
"name": "User Name",
"email": "user@example.com"
}


### PUT /user/:id/password

Updates the password for a user by ID.

#### Request

{
"password": "NewPassword123"
}


#### Response

{
"userId": "user_id_here",
"message": "Password updated successfully"
}


## Postman Documentation

For more detailed API documentation, you can refer to the Postman collection: [Postman Documentation](https://documenter.getpostman.com/view/33710711/2sA3s6FVef)


## Technologies Used

- Node.js
- Express
- TypeScript
- ts-node
- ts-node-dev
- dotenv
- chalk
- figlet
- morgan
- winston
- password.js
- @types/express
- @types/morgan
- @types/node