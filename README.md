🚚 Fleet-Management-And-Vehicle-Tracking-System

The Fleet Management and Vehicle Tracking System (FMVTS) is a microservices-based backend platform designed to manage vehicles, drivers, trips, maintenance operations, and notifications in a scalable, secure, and role-driven manner.

The system:

Enables real-time fleet tracking

Enforces Role-Based Access Control (RBAC)

Uses event-driven communication for data consistency and automation

Ensures loose coupling, high scalability, and fault isolation

The platform consists of seven independent microservices, each responsible for a specific business domain, communicating via REST APIs and asynchronous messaging (RabbitMQ).

🔐 Role-Based Access Control (RBAC)

Access to system features is governed by user roles, ensuring security and operational clarity.

👨‍💼 Fleet Manager

Highest level of access

Manages:

Vehicles

Drivers

Trips

Maintenance

Notifications

🧑‍💻 Admin

Access to system-wide insights and analytics

Views:

Trip summaries

Operational metrics

🚗 Driver

Limited access

Can:

View assigned vehicle

View assigned trip details

Each API endpoint enforces role-based permissions to ensure users can perform only authorized actions.

🧩 Microservices Overview
1️⃣ fmvts-apigateway 🚀

Acts as the single entry point for all client requests.

Routes incoming requests to appropriate microservices

Performs authentication and authorization before routing

Ensures secure access to backend services

Abstracts internal service endpoints from clients

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-apigateway

2️⃣ fmvts-userMicroservice 👤

Responsible for user lifecycle and role management.

Registers users based on role (Admin, Fleet Manager, Driver)

Updates and manages user profile details

Fetches user details for authentication and authorization

Deletes user accounts

Subscribes to driver activity events

Updates vehicle assignments dynamically

Maintains accurate driver–vehicle mapping based on trip lifecycle events

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-user-microservice

3️⃣ fmvts-authMicroservice 🔑

Handles authentication and token management.

Communicates with User Microservice for user validation

Authenticates users during login

Generates and validates JWT tokens

Acts as the security backbone for protected API access

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-auth-microservice

4️⃣ fmvts-vehicleMicroservice 🚛

Manages all vehicle-related operations.

Registers new vehicles

Views and updates vehicle details

Tracks vehicle status (Active, Inactive, Retired)

Assigns and unassigns vehicles to drivers

Detects vehicles requiring maintenance

Retires vehicles from active fleet

Subscribes to trip distance events to sync vehicle metrics

Publishes vehicle assignment details for driver synchronization

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-vehicle-microservice

5️⃣ fmvts-tripMicroservice 🌍🔄🚚

Manages the entire trip lifecycle.

Initiates new trips

Updates trip status in real time

Tracks trip progress and completion

Generates trip insights and analytics

Updates and deletes trip records

Publishes delayed trip events to Notification Microservice

Publishes driver activity events to update driver availability

Publishes travelled distance data to Vehicle Microservice

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-trip-service

6️⃣ fmvts-maintenanceMicroservice 👨🏻‍🔧🛻

Responsible for maintenance detection and coordination.

Communicates with Vehicle Microservice

Identifies vehicles due for maintenance

Applies maintenance rules and thresholds

Publishes maintenance events to Notification Microservice

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-maintenance-service

7️⃣ fmvts-notificationMicroservice 📧

Handles event-driven notifications and insights.

Subscribes to:

Maintenance events

Delayed trip events

Sends notifications to relevant fleet managers

Supports multiple notification templates

Maintains notification logs and insights

Ensures timely alerts for operational decision-making

🔗 Repo:
https://github.com/Nithinkumar18/fmvts-notification-service

🛠️ Tech Stack

The Fleet Management and Vehicle Tracking System is built using a modern, scalable backend technology stack optimized for microservices and real-time processing.

🔧 Backend & APIs

Node.js – Runtime environment for scalable, high-performance backend services

Express.js – Lightweight framework for building RESTful APIs and middleware

🗄️ Database

MongoDB – NoSQL database for flexible schema design and efficient data storage

🔄 Messaging & Event Handling

RabbitMQ – Message broker for asynchronous, event-driven microservice communication

📊 Logging & Monitoring

Winston – Centralized logging framework for structured logs and observability

🔐 Security

JWT (JSON Web Tokens) – Authentication and secure access control

Role-Based Access Control (RBAC) – Permission-based access for Admins, Fleet Managers, and Drivers

📧 Email Service
 Brevo - Brevo is the most intuitive all-in-one customer engagement platform: email and SMS marketing, automation, CRM, live chat, and transactional email.

