
# Solana Blockchain Explorer

## Overview

This repository demonstrates an advanced blockchain explorer specifically for the Solana blockchain. The project showcases the ability to interact with blockchain data and provide useful insights through a user-friendly interface. It includes backend services for fetching data from the Solana blockchain and a frontend for displaying the data.

## Features

- **Fetch and display blocks, transactions, and addresses**: Retrieve and show detailed information.
- **Search functionality**: Search for specific blocks and transactions.
- **Display metrics and statistics**: Visualize various blockchain metrics and statistics.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Rust](https://www.rust-lang.org/tools/install) (for local development)
- [Node.js](https://nodejs.org/) (for local frontend development)

## Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd solana-blockchain-explorer
```

### 2. Build and Run the Docker Containers

Use Docker Compose to build and run the services:

```bash
docker-compose up --build
```

This command will build the Docker images for the backend and frontend and start the services.

### 3. Accessing the Services

- **Frontend**:
  - Open your browser and go to `http://localhost:3000`.

- **Backend**:
  - The backend API is available at `http://localhost:8080/api`.

## Project Structure

```
solana-blockchain-explorer
├── backend
│   ├── src
│   │   ├── main.rs
│   │   ├── routes
│   │   ├── handlers
│   │   └── models
│   ├── Cargo.toml
│   └── Dockerfile
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.js
│   │   └── index.js
│   ├── public
│   ├── package.json
│   └── Dockerfile
├── scripts
│   └── deploy.sh
├── tests
│   ├── backend_tests.rs
│   ├── frontend_tests.js
│   └── integration_tests.rs
├── README.md
└── docker-compose.yml
```

## Backend

The backend is built with Actix-web and interacts with the Solana blockchain using the Solana SDK. It provides endpoints to fetch blocks, transactions, and addresses.

### Running the Backend Locally

1. **Install Rust**: Follow the instructions on [rust-lang.org](https://www.rust-lang.org/learn/get-started).
2. **Run the Backend**:

    ```bash
    cd backend
    cargo run
    ```

3. **Access the API**:
    - The backend API is available at `http://localhost:8080/api`.

### Endpoints

- **Get Block**: `/api/blocks/{block_id}`
- **Get Transaction**: `/api/transactions/{tx_id}`
- **Get Address**: `/api/addresses/{address}`

## Frontend

The frontend is built with React and provides a user-friendly interface to interact with the backend API and display data.

### Running the Frontend Locally

1. **Install Node.js**: Follow the instructions on [nodejs.org](https://nodejs.org/).
2. **Run the Frontend**:

    ```bash
    cd frontend
    npm install
    npm start
    ```

3. **Access the Frontend**:
    - Open your browser and go to `http://localhost:3000`.

### Pages

- **Blocks**: Displays block details.
- **Transactions**: Displays transaction details.
- **Addresses**: Displays address/account details.

## Tests

The repository includes tests for both the backend and frontend.

### Running Tests

- **Backend Tests**: Run the Rust tests in the `tests` directory.

    ```bash
    cd backend
    cargo test
    ```

- **Frontend Tests**: Run the JavaScript tests in the `tests` directory.

    ```bash
    cd frontend
    npm test
    ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Conclusion

This detailed `README.md` should provide clear instructions and information for anyone looking to set up and use the Solana Blockchain Explorer, contributing to its development, or understanding its structure and functionality.
