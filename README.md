# Nodejs-Backend

run the following command in the terminal.

# npm express mongoose passport passport-local bcryptjs cors express-session body-parser dotenv

This will install Express (web framework), MongoDB (mongoose a MongoDB object modeling tool designed to work in an asynchronous environment.), Passport (authentication middleware for Node.js.), bcryptjs (for password), CORS (Cross-Origin Resource Sharing), and body-parser (for parsing incoming request bodies.), dotenv (to load environment from a .env file)


For the environment variables (`.env file), you might have something like:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/myDatabase```
Remember to replace "myDatabase" with your actual database name.

This is a basic version of the backend code, and you will need to add more layers such as error handling, validation, or security. You'll also need to implement your own passport strategy according to your needs.
Remember to test your endpoints with a REST client like Postman oromnia to ensure they're working as expected.
