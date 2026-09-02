# CI/CD Portfolio Application

A simple Node.js portfolio application demonstrating a complete **CI/CD workflow** using GitHub Actions, Docker, Docker Hub, automated testing, and Hugging Face Spaces.

## 🌐 Live Demo

**Live Application:**
https://udeeshajayendra-my-cicd-app.hf.space

---

# Screenshots

# GitHub Actions CI/CD pipeline workflow
<img width="1866" height="564" alt="1 1" src="https://github.com/user-attachments/assets/d04cc40f-0b52-447c-9f5c-a45c003eaede" />

# GitHub Actions workflow run history
<img width="1882" height="742" alt="1 2" src="https://github.com/user-attachments/assets/0bd9d962-0297-4757-9c8f-0d4d3f3f2cc9" />

# Jest automated test execution logs
<img width="1878" height="790" alt="1 3" src="https://github.com/user-attachments/assets/32cff466-3511-45ab-bd92-bf43344b2815" />

# Docker Hub repository image push
<img width="1547" height="420" alt="1 4" src="https://github.com/user-attachments/assets/e55ba5a2-bae4-44b5-a7fc-6aab2d8a8f94" />

# Live Application
<img width="1888" height="914" alt="1" src="https://github.com/user-attachments/assets/3fbbd2dd-a499-4684-a0b7-159f0768abc8" />

#  Project Overview

This project was built as part of my DevOps learning journey to gain hands-on experience with:

* CI/CD automation
* Automated testing
* Docker containerization
* Docker image publishing
* Cloud deployment

The application is automatically tested and containerized through a GitHub Actions workflow.

---

#  CI/CD Pipeline

Every time changes are pushed to the repository, GitHub Actions automatically performs the following steps:

1. Checks out the source code
2. Sets up the Node.js environment
3. Installs project dependencies
4. Runs automated tests
5. Builds a Docker image
6. Pushes the Docker image to Docker Hub

This helps automate the build and delivery process.

## Pipeline Flow

```text
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ├── Install Dependencies
      │
      ├── Run Tests
      │
      ├── Build Docker Image
      │
      ▼
Docker Hub
      │
      ▼
Hugging Face Spaces
      │
      ▼
Live Application
```

---

#  Automated Testing

The project uses automated tests to verify that important application functionality works correctly.

The CI pipeline runs the tests before building and pushing the Docker image.

If the test stage fails, the workflow stops before the image is published.

---

#  Docker

The application is containerized using Docker.

## Build the Image

```bash
docker build -t my-cicd-app .
```

## View Docker Images

```bash
docker images
```

## Run Locally

```bash
docker run -p 3000:3000 udeeshajayendra/my-cicd-app:latest
```

Then open:

```text
http://localhost:3000
```

---

#  Docker Hub

The Docker image is automatically pushed to Docker Hub through GitHub Actions.

Docker image:

```text
udeeshajayendra/my-cicd-app:latest
```

---

#  Deployment

The application is deployed using **Hugging Face Spaces**.

The Hugging Face Space uses a Dockerfile that pulls and runs the Docker image.

Live URL:

```text
https://udeeshajayendra-my-cicd-app.hf.space
```

---

# 🛠️ Technologies Used

| Technology          | Purpose                   |
| ------------------- | ------------------------- |
| Node.js             | Application runtime       |
| Express.js          | Web application framework |
| Jest                | Automated testing         |
| Supertest           | API testing               |
| Docker              | Containerization          |
| Docker Hub          | Container image registry  |
| GitHub Actions      | CI/CD automation          |
| Hugging Face Spaces | Application hosting       |

---

#  Project Structure

```text
my-cicd-project/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── public/
│   └── index.html
│
├── Dockerfile
├── index.js
├── index.test.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Run the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/UdeeshaJayendra/my-cicd-project.git
```

## 2. Navigate to the Project

```bash
cd my-cicd-project
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run the Application

```bash
npm start
```

The application should be available at:

```text
http://localhost:3000
```

---

# 🧪 Run Tests

```bash
npm test
```

---

#  What I Learned

Through this project, I gained practical experience with:

* Creating CI/CD pipelines using GitHub Actions
* Writing and running automated tests
* Building Docker images
* Using Docker Hub as a container registry
* Managing secrets in GitHub Actions
* Automating build and delivery workflows
* Deploying a containerized application

---

#  Future Improvements

Possible improvements for this project include:

* Add code quality checks
* Add security scanning
* Add Docker image vulnerability scanning
* Add version tags for Docker images
* Deploy to a Kubernetes environment
* Add monitoring and logging
* Implement automated deployment stages

---

# Author

**Udeesha Jayendra**

---
