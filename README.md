# Student Task Tracker – DevOps Cloud Deployment Project

## Project Overview

The **Student Task Tracker** is a RESTful backend application built using Node.js and Express to help students manage daily tasks efficiently.
This project focuses on implementing real-world **DevOps practices** such as containerization, CI/CD automation, and cloud deployment using AWS.

The goal of this project was to simulate an industry-grade workflow where applications are developed, tested, and deployed in an automated and scalable environment.

---

## System Architecture

This project follows a cloud-native deployment approach:

1. The developer pushes code to GitHub.
2. GitHub Actions triggers the CI/CD pipeline.
3. The application is built and containerized using Docker.
4. The container is deployed to an AWS EC2 instance.
5. Nginx is used as a reverse proxy to route incoming requests.
6. End users access the application via the cloud.

Architecture Components:

* Client / Browser
* Nginx Reverse Proxy
* Node.js Express Backend
* Docker Containers
* AWS EC2 (Ubuntu)
* GitHub Actions CI/CD

---

## Tech Stack

* Node.js
* Express.js
* Docker
* Docker Compose
* Nginx
* GitHub Actions
* AWS EC2
* Linux (Ubuntu)
* REST APIs

---

## Key Features

* RESTful API with full CRUD functionality.
* Containerized backend for consistent environments.
* Environment-based configuration using `.env` files.
* Multi-container setup using Docker Compose.
* Reverse proxy configuration using Nginx.
* Automated CI/CD pipeline with GitHub Actions.
* Cloud deployment on AWS EC2.
* Secure handling of configuration and secrets.

---

## Project Structure

```
student-task-tracker/
│
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── nginx/
│   └── default.conf
├── .env
└── .github/workflows/
    └── deploy.yml
```

---

## Getting Started

### Clone the Repository

```
git clone https://github.com/Stalin-22/student-task-tracker.git
cd student-task-tracker
```

### Install Dependencies

```
npm install
```

### Run Locally

```
node server.js
```

The application will run on:

```
http://localhost:3000
```

---

## Docker Setup

### Build Docker Image

```
docker build -t student-task-tracker .
```

### Run Container

```
docker run -p 3000:3000 student-task-tracker
```

---

## Docker Compose (Multi-Container Setup)

```
docker-compose up -d --build
```

This setup allows the application and reverse proxy to run in separate containers.

---

## CI/CD Workflow

This project implements a basic CI/CD pipeline using GitHub Actions.

Pipeline Steps:

1. Code is pushed to the feature branch.
2. Pull request is merged into the main branch.
3. GitHub Actions workflow is triggered.
4. Docker image is built automatically.
5. The application is prepared for deployment on AWS.

This automation reduces manual effort and ensures consistent builds.

---

## Cloud Deployment (AWS EC2)

Deployment Steps:

1. Launch Ubuntu EC2 instance.
2. Configure security groups to allow HTTP and SSH.
3. Install Docker and Docker Compose.
4. Clone the repository.
5. Run the containerized application.
6. Configure Nginx reverse proxy for routing.

The application becomes accessible via the public IP of the EC2 instance.

---

## Environment Configuration

Sensitive configurations are stored in `.env` files and excluded from version control using `.gitignore`.
This ensures secure and environment-specific deployment.

---

## Challenges Faced

* Handling Docker build failures due to missing environment variables.
* Debugging container networking issues.
* Configuring Nginx reverse proxy for proper routing.
* Setting up GitHub Actions workflows.
* Managing AWS security groups and port configurations.

These challenges improved understanding of real-world DevOps troubleshooting.

---

## Future Improvements

* Add database integration (MongoDB or PostgreSQL).
* Implement authentication and authorization.
* Introduce Infrastructure as Code using Terraform.
* Add monitoring and logging (Prometheus, Grafana).
* Automate deployment to AWS using SSH and pipelines.
* Add load balancing and auto-scaling.

---

## Live Deployment

Live deployment available on AWS EC2 (link can be shared upon request).

---

## Learning Outcomes

Through this project, I gained hands-on experience in:

* Containerization and Docker workflows.
* CI/CD automation.
* Cloud infrastructure deployment.
* Reverse proxy and networking.
* Linux server management.
* DevOps best practices.

---

## Contact

Feel free to connect:

GitHub: https://github.com/Stalin-22
LinkedIn: https://www.linkedin.com/in/stalindcosta22