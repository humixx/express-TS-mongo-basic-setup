This is a Node.js backend project built using Express, TypeScript, and MongoDB. It includes routes, models, controllers, and utilities to manage user-related operations, with swagger integration for API documentation.

Requirements
Node.js (v14 or later)
MongoDB (running instance or MongoDB Atlas)
TypeScript
Nodemon (for development)
Installation

![WhatsApp Image 2024-10-20 at 23 10 18_c202ba33](https://github.com/user-attachments/assets/3b99afc8-c0d0-4618-a53e-3d321d91e205)

Clone the repository:



git clone https://github.com/your-username/humrahi-backend.git

Install dependencies:
npm install
Create a .env file in the root directory and configure your environment variables:


MONGO_URI=your_mongo_connection_string
PORT=3000
Running the Project
To start the development server with Nodemon (for auto-reloading), run the following command:

npm run dev
For production mode:

npm start

Available Scripts
npm run dev: Runs the app in development mode with Nodemon.
npm run build: Compiles the TypeScript code into JavaScript.
npm start: Starts the compiled project in production mode.

API Endpoints
This project uses Swagger for API documentation. Once the server is running, you can access the API documentation at:



http://localhost:3000/api-docs
Example Routes
POST /api/users: Create a new user.
GET /api/users: Retrieve a list of users.
GET /api/users/:id: Retrieve a single user by ID.
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID.

Project Configuration
TypeScript
The project is configured with TypeScript for type safety. You can configure the TypeScript settings in tsconfig.json.

MongoDB
The project uses Mongoose to interact with a MongoDB database. You will need to set the connection string in the .env file for MONGO_URI.

Contribution
Feel free to submit pull requests or issues. Any kind of feedback is appreciated!
The project is configured with TypeScript for type safety. You can configure the TypeScript settings in tsconfig.json.

