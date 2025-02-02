Superhero API

How to Collaborate and Expand This Project

1. Feature Expansion

Add new superhero attributes (for example: teamAffiliation, originStory).

Implement pagination for GET /superheroes to manage large datasets.

Add search and filtering options based on superhero name or superpower.

2. Testing Enhancements

Write additional tests for edge cases (e.g., handling duplicate names, extreme humility scores).

Introduce integration tests using SuperTest to validate API endpoints.

Ensure comprehensive unit test coverage for controllers and services.

3. Database Integration

Replace the in-memory storage with PostgreSQL or MongoDB using TypeORM or Mongoose.

Implement database migrations and seed scripts for consistent test data.

Ensure proper error handling and validation for database operations.

4. API Documentation

Integrate Swagger (NestJS Swagger Module) for automatic API documentation.

Define clear request/response formats with examples.

Maintain up-to-date API documentation as features evolve.

5. Team Workflow

Use Git branches (feature/add-pagination, fix/test-coverage) for structured development.

Review each other's pull requests (PRs) to maintain high-quality code base.

Schedule short sync-up meetings or use a shared task board (Jira) for tracking progress.


How to Set Up and Run the Project

1. Installation

Clone the repository and install dependencies:
git clone https://github.com/silviu-cpu/superhero-api.git
cd superhero-api
npm install

2. Running the Server

Start the NestJS development server:
nest start

3. Testing Endpoints

You can use Postman or cURL to test the API endpoints:
curl -X GET http://localhost:3000/superheroes 

curl -X POST http://localhost:3000/superheroes \
     -H "Content-Type: application/json" \
     -d '{"name": "Batman", "superpower": "Intelligence", "humilityScore": 8}'

4. Running Tests

Run unit tests using Jest: npm test