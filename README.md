<<<<<<< HEAD
# FlashReport

FlashReport is a web application that enables citizens to report corruption incidents and request government interventions. The platform allows users to create, manage, and track reports with location data, media attachments, and real-time status updates.

## Features

- User authentication (signup/login)
- Create and manage red-flag records (corruption incidents)
- Create and manage intervention records (government intervention requests)
- Geolocation support for incident reporting
- Media attachments (images and videos)
- Admin dashboard for managing reports
- Real-time status updates
- Interactive map visualization

## Tech Stack

- Frontend: React.js
- Backend: Spring Boot
- Database: PostgreSQL
- Authentication: JWT
- Maps: Google Maps API

## Project Structure

```
flash_project/
├── frontend/           # React frontend application
├── backend/            # Spring Boot backend application
└── docs/              # Project documentation
```

## Prerequisites

- Node.js (v18 or higher)
- Java JDK 17 or higher
- Maven
- PostgreSQL
- Git

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   mvn install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend server will start on http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend application will start on http://localhost:3000

## API Documentation

API documentation is available at http://localhost:8080/swagger-ui.html when running the backend server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 