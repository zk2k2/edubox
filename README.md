# 📦 EduBox



https://github.com/zk2k2/edubox/assets/98645757/dfac3356-1e9a-4c67-8cdf-69f48bf4b2b1



EduBox is a platform designed and implemented for the automated deployment of containerized Linux environments with a noVNC desktop interface, enabling users to learn Linux and run code in Python, Node.js, Java, and more.

## ✨ Features
- **Flexible Deployment**: Deploy environments with various base images.
- **Programming Environment Setup**: Easily install Python, Node.js, and Java.
- **Multiple Configurations**: Deploy multiple environments with different setups.
- **User-Friendly**: Designed to be approachable for students with varying levels of technical expertise.

## 🚀 Getting Started

### ✅ Prerequisites
Ensure you have the following installed on your system:
- Java (for backend)
- Node.js and npm (for frontend)
- Python and Flask (for API)
- Windows Subsystem for Linux (WSL) or a similar Linux environment

### 🛠 Backend Setup
1. **Navigate to the backend directory:**
    ```sh
    cd backend/java
    ```
2. **Run the Spring Boot backend application:**
    ```sh
    ./mvnw spring-boot:run
    ```

### 💻 Frontend Setup
1. **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```
2. **Start the frontend application:**
    ```sh
    npm start
    ```

### 🔧 VM API Setup
1. **Open a WSL session and run the following commands:**
    ```sh
    root@/edubox# cd vm_backend/Api
    root@/edubox/vm_backend/Api# flask --app api.py run --host=0.0.0.0
    ```

This setup will get EduBox up and running on your local machine, allowing you to deploy and manage Virtual Machines for educational purposes. If you encounter any issues, please refer to the documentation or contact our support team.

## 🤝 Contributing
We welcome contributions to improve EduBox! Please fork the repository and submit pull requests for review.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact
For more information, please contact me via email.
