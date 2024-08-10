# Movie Gold

## Project Overview
**Movie Gold** is a movie website that showcases the latest movies, series, TV shows, and animes. It also provides users with the opportunity to review recently released movies.

## Technologies Used

- **Frontend:** React, Material UI
- **Backend:** Spring Boot, MongoDB

## Installation and Setup
### Prerequisites
Before you begin, ensure you have the following installed on your system:

- **Node.js:** Download and install Node.js
- **Java:** Download and install Java
- **Maven:** Download and install Maven

### Installation Steps

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/movie-gold.git
```

**2. Navigate to the project directory:**

```bash
cd movie-gold
```

**3. Frontend Setup:**

- Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

- Install the necessary dependencies:

    ```bash
    npm install
    ```

**4. Backend Setup:**

- Navigate to the backend directory:

    ```bash
    cd ../backend
    ```

- Build the project using Maven:

    ```bash
    mvn clean install
    ```

## Usage
### Running the Application

**1. Frontend:**

- Navigate to the **`frontend`** directory if you're not already there:

    ```bash
    cd frontend
    ```

- Start the React application:

    ```bash
    npm start
    ```

- The frontend will be available at http://localhost:3001.

**2. Backend:**

- Navigate to the **`backend`** directory:

    ```bash
    cd ../backend
    ```

- Start the Spring Boot application. You can do this by clicking the "**Run**" button in your IDE or by using the command:
    ```bash
    mvn spring-boot:run
    ```

- The backend will be accessible at http://localhost:8080.

### Accessing the Application

- **Frontend:** Open your web browser and go to http://localhost:3001.
- **Backend: **The backend API will be running at http://localhost:8080.

## Features

- **Get Movies:** Retrieve a list of recent movies, series, TV shows, and animes.
- **Create Reviews:** Users can submit reviews for the latest movies.

