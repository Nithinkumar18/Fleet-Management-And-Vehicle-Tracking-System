# Fleet-Management-And-Vehicle-Tracking-System

  The Fleet Management and Vehicle Tracking System (FMVTS) is a microservices-based backend platform designed to manage vehicles, drivers, trips, maintenance operations, and notifications in a scalable, secure,       and role-driven manner.
  The system enables real-time tracking of fleet operations, enforces role-based access control (RBAC), and supports event-driven communication between services for data consistency and automation.
  The platform is architected using seven independent microservices, each responsible for a specific business domain, communicating via REST APIs and asynchronous events (message queues). This design ensures          loose coupling, high scalability, and fault isolation.


  🔐 Role-Based Access Control (RBAC)
      Access to system features is governed by user roles, ensuring security and operational clarity:
       Fleet Manager
        Highest level of access
        Manages vehicles, drivers, trips, maintenance, and notifications
      Admin
        Access to system-wide insights and analytics
        Views trip summaries and operational metrics
      Driver
        Limited access
        Can view assigned vehicle and trip details only
        Each API endpoint enforces role-based permissions to ensure that users can perform only authorized actions.


1️⃣ fmvts-apigateway 🚀
       Acts as the single entry point for all client requests.
       Routes incoming requests to the appropriate microservice
       Performs authentication and authorization checks before forwarding requests
       Ensures secure access to backend services
       Simplifies client interaction by abstracting internal service endpoints
       **repo-url** : https://github.com/Nithinkumar18/fmvts-apigateway

2️⃣ fmvts-userMicroservice 👤
     Responsible for user lifecycle and role management.
     Registers new users based on assigned roles (Admin, Fleet Manager, Driver)
     Updates and manages user profile details
     Fetches user information for authentication and authorization
     Deletes user accounts when required
     Subscribes to driver activity events to update vehicle assignments dynamically
     Maintains accurate driver–vehicle mapping based on trip lifecycle events
     **repo-url** : https://github.com/Nithinkumar18/fmvts-user-microservice


3️⃣ fmvts-authMicroservice 🔑
     Handles authentication and token management.
     Communicates with the User Microservice for user validation
     Authenticates users during login
     Generates and validates JWT tokens
     Acts as the security backbone for protected API access
     **repo-url** : https://github.com/Nithinkumar18/fmvts-auth-microservice


4️⃣ fmvts-vehicleMicroservice 🚛
      Manages all vehicle-related operations.
      Registers new vehicles into the fleet
      Views and updates vehicle details
      Tracks vehicle status (active, inactive, retired)
      Assigns and unassigns vehicles to drivers
      Detects vehicles requiring maintenance
      Retires vehicles from active fleet
      Subscribes to trip distance events to keep vehicle metrics in sync
      Publishes vehicle assignment details for driver synchronization
      **repo-url** : https://github.com/Nithinkumar18/fmvts-vehicle-microservice


5️⃣ fmvts-tripMicroservice 🌎🔄🚚
     Manages the entire trip lifecycle.
     Initiates new trips
     Updates trip status in real time
     Tracks trip progress and completion
     Generates trip insights and analytics
     Updates and deletes trip records when required
     Publishes delayed trip events to the Notification Microservice
     Publishes driver activity events to update driver availability
     Publishes distance travelled data to the Vehicle Microservice
     **repo-url** : https://github.com/Nithinkumar18/fmvts-trip-service


6️⃣ fmvts-maintenanceMicroservice  👨🏻‍🔧🛻
      Responsible for maintenance detection and coordination.
      Communicates with the Vehicle Microservice to identify vehicles due for maintenance
      Applies maintenance rules and thresholds
      Publishes maintenance-related events to the Notification Microservice for alerts
      **repo-url** : https://github.com/Nithinkumar18/fmvts-maintenance-service


7️⃣ fmvts-notificationMicroservice 📧
     Handles event-driven notifications and insights.
     Subscribes to maintenance and delayed trip events
     Sends notifications to relevant fleet managers
     Supports multiple notification templates based on event type
     Maintains insights and logs of notifications sent
     Ensures timely alerts for operational decision-making
     **repo-url** : https://github.com/Nithinkumar18/fmvts-notification-service




🛠️ Tech Stack

The Fleet Management and Vehicle Tracking System is built using a modern, scalable backend technology stack optimized for microservices and real-time processing.

Backend & APIs
Node.js – Runtime environment for building scalable, high-performance backend services
Express.js – Lightweight web framework for building RESTful APIs and middleware-based request handling

Database
MongoDB – NoSQL database for flexible schema design, high availability, and efficient data storage across microservices

Messaging & Event Handling
RabbitMQ – Message broker for asynchronous, event-driven communication between microservices, ensuring loose coupling and reliability

Logging & Monitoring
Winston – Centralized logging framework for structured logs, error tracking, and service-level observability

Security
JWT (JSON Web Tokens) – Used for authentication and secure access control across microservices
Role-Based Access Control (RBAC) – Enforces permission-based access for Admins, Fleet Managers, and Drivers
