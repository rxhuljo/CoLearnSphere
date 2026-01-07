
---

# 🌐 Co-Learn Sphere

*A Collaborative Learning & Peer Tutoring Platform*

Co-Learn Sphere is a **web-based collaborative learning platform** designed to help students connect, learn together, and grow academically through **group study sessions, peer tutoring, and performance analytics**. The platform bridges the gap between isolated self-study and interactive, peer-driven learning by providing a **structured, secure, and intelligent academic environment**.

---

## 🎯 Project Motivation

In today’s academic landscape, students frequently face challenges such as:

* Finding like-minded peers for effective group study
* Organizing structured and consistent study sessions
* Accessing peer tutoring in an efficient manner
* Tracking academic progress beyond raw scores

Co-Learn Sphere addresses these challenges through a **centralized collaborative platform** that encourages **peer learning, mentorship, and data-driven academic insights**.

---

## ✨ Key Features

### 👥 Collaborative Learning

* Create and join **group study sessions**
* Topic-based study group formation
* Real-time peer interaction and engagement

### 🎓 Peer Tutoring

* Students can offer tutoring services
* Support for one-on-one and group tutoring sessions
* Tutor–learner matching based on subject expertise

### 💬 Communication Module

* Real-time chat powered by WebSockets
* Discussion forums for asynchronous collaboration
* Integrated video conferencing support

### 📊 Performance Analysis & Prediction

* Tracks student engagement and historical performance
* **Machine Learning-based SGPA prediction**
* Visual analytics to monitor academic progression

### 🔐 Secure User Management

* Authentication with role-based access control
* Secure handling of user profiles and academic data

---

## 🧠 Machine Learning Component

* Predicts **future SGPA** using historical semester data
* Feature engineering includes:

  * Average SGPA
  * Performance trends across semesters
  * Semester-wise progression patterns
* Implemented using **Scikit-learn (MLP Regressor)**
* Achieved consistently high accuracy with **R² scores greater than 0.97**

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
Machine Learning Module (Scikit-learn)
```

**Technology Overview**

* **Frontend:** React (HTML, CSS, JavaScript)
* **Backend:** Flask (Python)
* **Database:** PostgreSQL
* **Real-time Communication:** WebSockets
* **Machine Learning:** Scikit-learn

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

| Layer            | Technology                   |
| ---------------- | ---------------------------- |
| Frontend         | React, HTML, CSS, JavaScript |
| Backend          | Python (Flask)               |
| Database         | PostgreSQL                   |
| Machine Learning | Scikit-learn                 |
| Real-time        | Flask-SocketIO               |
| Tools            | Git, VS Code, Postman        |

---

## 💻 Hardware & Software Requirements

### Minimum Hardware

* 4 GB RAM (8 GB recommended)
* Dual-core processor or higher
* Stable internet connection

### Software

* Python 3.x
* Node.js & npm
* PostgreSQL
* Modern web browser (Chrome / Firefox)

---

## 🚀 How to Run (High-Level)

1. Clone the repository
2. Configure the PostgreSQL database
3. Set up the backend environment (Flask)
4. Run the frontend using React
5. Train and integrate the ML model
6. Launch backend and frontend servers

> Detailed setup instructions can be added in future iterations.

---

## 📌 Use Cases

* College-level group study coordination
* Peer tutoring platforms
* Academic performance tracking systems
* Collaborative EdTech applications

---

## 🔮 Future Enhancements

* Mobile application support
* AI-based tutor recommendations
* Gamification for improved engagement
* Deep learning-based performance prediction
* NLP-based discussion and content analysis

---


