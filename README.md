This is a Node.js backend project built using Express, TypeScript, and MongoDB. It includes routes, models, controllers, and utilities to manage user-related operations, with swagger integration for API documentation.

Requirements
Node.js (v14 or later) <br/>
MongoDB (running instance or MongoDB Atlas)<br/>
TypeScript<br/>
Nodemon (for development)<br/>
Installation<br/>

![WhatsApp Image 2024-10-20 at 23 10 18_c202ba33](https://github.com/user-attachments/assets/3b99afc8-c0d0-4618-a53e-3d321d91e205)

Clone the repository:<br/>
git clone 

Install dependencies:<br/>
npm install<br/>
Create a .env file in the root directory and configure your environment variables:<br/>


MONGO_URI=your_mongo_connection_string<br/>
PORT=3000<br/>
Running the Project<br/>
To start the development server with Nodemon (for auto-reloading), run the following command:<br/>

npm run dev<br/>
For production mode:<br/>

npm start<br/>

Available Scripts<br/>
npm run dev: Runs the app in development mode with Nodemon.<br/>
npm run build: Compiles the TypeScript code into JavaScript.<br/>
npm start: Starts the compiled project in production mode.<br/>

API Endpoints<br/>
This project uses Swagger for API documentation. Once the server is running, you can access the API documentation at:<br/>



http://localhost:3000/api-docs<br/>
Example Routes<br/>
POST /api/users: Create a new user.<br/>
GET /api/users: Retrieve a list of users.<br/>
GET /api/users/:id: Retrieve a single user by ID.<br/>
PUT /api/users/:id: Update a user by ID.<br/>
DELETE /api/users/:id: Delete a user by ID.<br/>

Project Configuration<br/>
TypeScript<br/>
The project is configured with TypeScript for type safety. You can configure the TypeScript settings in tsconfig.json.<br/>

MongoDB<br/>
The project uses Mongoose to interact with a MongoDB database. You will need to set the connection string in the .env file for MONGO_URI.<br/>

Contribution<br/>
Feel free to submit pull requests or issues. Any kind of feedback is appreciated!<br/>
The project is configured with TypeScript for type safety. You can configure the TypeScript settings in tsconfig.json.<br/>

