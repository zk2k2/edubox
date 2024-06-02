# 📦 EduBox

EduBox is a platform designed to simplify the deployment of Virtual Machines (VMs) for educational purposes. It allows users to deploy VMs with a base image of their choice and install essential programming environments such as Python, Node.js, and Java. EduBox also supports deploying multiple VMs with different configurations, providing students with a flexible and approachable way to set up Linux environments for their learning needs.

## ✨ Features
- **Flexible VM Deployment**: Deploy VMs with various base images.
- **Programming Environment Setup**: Easily install Python, Node.js, and Java.
- **Multiple Configurations**: Deploy multiple VMs with different setups.
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

### 🔧 API Setup
1. **Open a WSL session and run the following commands:**
    ```sh
    root@BEST-TECHNOLOGY:/mnt/c/Users/USER/Documents/Projects/edubox# cd vm_backend
    root@BEST-TECHNOLOGY:/mnt/c/Users/USER/Documents/Projects/edubox/vm_backend# cd Api
    root@BEST-TECHNOLOGY:/mnt/c/Users/USER/Documents/Projects/edubox/vm_backend/Api# flask --app api.py run --host=0.0.0.0
    ```

This setup will get EduBox up and running on your local machine, allowing you to deploy and manage Virtual Machines for educational purposes. If you encounter any issues, please refer to the documentation or contact our support team.

## 🤝 Contributing
We welcome contributions to improve EduBox! Please fork the repository and submit pull requests for review.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact
For more information, please contact me via my GitHub page.
