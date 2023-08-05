# Project Name

This is a Node.js application that serves as an example for setting up a basic API with Express and Sequelize, using MySQL as the database. The application allows you to manage clients, types of marmita (a type of meal), and their registrations.

## Requirements

- Node.js (version 18.17.0)
- Docker (optional)

## Getting Started

### Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd project-name
```

2. Install the dependencies:

```bash
npm install
```

3. Set up the database:

Make sure you have MySQL running locally. Create a new database and update the `.env` file with your database configuration.

4. Run migrations:

```bash
npx sequelize-cli db:migrate
```

5. Start the application:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

### Docker

1. Clone the repository:

```bash
git clone <repository-url>
cd project-name
```

2. Set up the environment variables:

Copy the `.env.example` file to a new file called `.env`:

```bash
cp .env.example .env
```

Edit the `.env` file and set the appropriate values for the database connection.

3. Build and run the Docker containers:

```bash
docker-compose up --build
```

This will build the Node.js application and MySQL containers. The API will be available at `http://localhost:3000`.

## API Endpoints

- **GET /clientes**: Get all clients.
- **GET /clientes/:id**: Get a client by ID.
- **POST /clientes**: Create a new client.
- **PUT /clientes/:id**: Update a client by ID.
- **DELETE /clientes/:id**: Delete a client by ID.

- **GET /tipomarmita**: Get all types of marmita.
- **GET /tipomarmita/:id**: Get a type of marmita by ID.
- **POST /tipomarmita**: Create a new type of marmita.
- **PUT /tipomarmita/:id**: Update a type of marmita by ID.
- **DELETE /tipomarmita/:id**: Delete a type of marmita by ID.

- **GET /registros**: Get all registrations.
- **GET /registros/:id**: Get a registration by ID.
- **POST /registros**: Create a new registration.
- **PUT /registros/:id**: Update a registration by ID.
- **DELETE /registros/:id**: Delete a registration by ID.

This project also includes an API collection that you can import into tools like Insomnia or Postman. The collection contains pre-defined API requests for all the available endpoints, making it easier to test the API functionalities. You can find the API collection in the `api_collection.json` file of this repository.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).