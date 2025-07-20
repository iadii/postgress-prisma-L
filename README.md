# postgress-prisma-L

This project is a backend application using PostgreSQL as the database and Prisma as the ORM (Object-Relational Mapping) tool.

## Features

- PostgreSQL database integration
- Prisma ORM for type-safe database access
- Database schema management with Prisma Migrate
- Modular structure for scalability


## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL database

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/iadii/postgress-prisma-L.git
    cd backend-Learn/backend/db-orm
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure your `.env` file with your PostgreSQL connection string:
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```

4. Generate Prisma client:
    ```bash
    npx prisma generate
    ```

5. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```

### Running the Application

Start the backend server:
```bash
node [index.js](http://localhost:3000)
```
