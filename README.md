---

# 🌐 Co-Learn Sphere

*A Collaborative Learning & Peer Tutoring Platform*

Co-Learn Sphere is a **web-based collaborative learning platform** designed to help students connect, learn together, and grow academically through **group study sessions, peer tutoring, and performance analytics**. The system bridges the gap between isolated self-study and interactive peer-driven learning by providing a structured, secure, and intelligent environment for academic collaboration 

---

## 🎯 Project Motivation

Modern students often struggle with:

* Finding like-minded peers for group study
* Organizing structured study sessions
* Accessing peer tutoring efficiently
* Tracking academic progress meaningfully

Co-Learn Sphere addresses these challenges by offering a **centralized platform** that promotes **collaborative learning, mentorship, and data-driven academic insights**.

---

## ✨ Key Features

### 👥 Collaborative Learning

* Create and join **group study sessions**
* Topic-based study groups
* Real-time peer interaction

### 🎓 Peer Tutoring

* Students can offer tutoring services
* One-on-one and group tutoring sessions
* Tutor–learner matching based on expertise

### 💬 Communication Module

* Real-time chat using WebSockets
* Discussion forums for asynchronous learning
* Video conferencing support

### 📊 Performance Analysis & Prediction

* Tracks student engagement and past scores
* **Machine Learning-based SGPA prediction**
* Visual analytics for academic progression

### 🔐 Secure User Management

* Authentication & role-based access
* Secure handling of user and academic data

---

## 🧠 Machine Learning Component

* Predicts **future SGPA** using historical semester data
* Feature engineering includes:

  * Average SGPA
  * Performance trend
  * Semester-wise progression
* Implemented using **Scikit-learn (MLP Regressor)**
* Achieved high accuracy with **R² scores > 0.97** across semesters 

---

## 🏗️ System Architecture

```
Frontend (React)
     │
     ▼
Backend API (Flask + Flask-SocketIO)
     │
     ▼
PostgreSQL Database
     │
     ▼
ML Module (Scikit-learn)
```

* **Frontend:** React (HTML, CSS, JavaScript)
* **Backend:** Flask (Python)
* **Database:** PostgreSQL
* **Real-time Communication:** WebSockets
* **ML Models:** Scikit-learn

---

## 📂 Core Modules

* **User Management Module**
* **Study Group Management Module**
* **Communication Module**
* **Resource Sharing Module**
* **Performance Analysis & Score Prediction Module**

Each module is designed independently to ensure **scalability, maintainability, and modular development**.

---

## ⚙️ Technology Stack

| Layer     | Technology                   |
| --------- | ---------------------------- |
| Frontend  | React, HTML, CSS, JavaScript |
| Backend   | Python (Flask)               |
| Database  | PostgreSQL                   |
| ML        | Scikit-learn                 |
| Real-time | Flask-SocketIO               |
| Tools     | Git, VS Code, Postman        |

---

## 💻 Hardware & Software Requirements

### Minimum Hardware

* 4 GB RAM (8 GB recommended)
* Dual-core processor
* Stable internet connection

### Software

* Python 3.x
* Node.js & npm
* PostgreSQL
* Modern web browser (Chrome / Firefox)

---

## 🚀 How to Run (High-Level)

1. Clone the repository
2. Set up PostgreSQL database
3. Configure backend environment (Flask)
4. Run frontend using React
5. Train & integrate ML model
6. Launch backend and frontend servers

(Detailed setup can be added as a future enhancement.)

---

## 📌 Use Cases

* College group study coordination
* Peer tutoring platforms
* Academic performance tracking systems
* Collaborative EdTech applications

---

## 🔮 Future Enhancements

* Mobile application support
* AI-based tutor recommendations
* Gamification for engagement
* Deep learning-based performance prediction
* NLP-based discussion analysis

---
