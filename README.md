# Gamearc

<p align="center">
  <img src="https://img.shields.io/badge/Powered%20by-RAWG%20API-6772E5?style=for-the-badge&logo=rawg&logoColor=white" />
  <img src="https://img.shields.io/badge/Stripe%20Integration-008CDD?style=for-the-badge&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase%20Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/MERN%20Stack-000000?style=for-the-badge&logo=react&logoColor=61DAFB" />
</p>

---

<p align="center">
  <strong>Full-Stack E-Commerce Prototype for Digital Games.</strong><br>
  <em>Educational project demonstrating the integration of Stripe Payments, RAWG API, and JWT Authentication.</em>
</p>

---

<div align="center">
  <img src="https://i.postimg.cc/SRT2z3cZ/Screenshot-2025-05-18-020313.png" width="45%" alt="Catalog View"/>
  &nbsp;
  <img src="https://i.postimg.cc/s2YMJvpG/Screenshot-2025-07-06-014346.png" width="45%" alt="Detail and Cart View"/>
</div>

---

## 📂 Project Overview

Gamearc is a simulated digital distribution platform built with the MERN stack (MongoDB, Express, React, Node.js). The objective of this project is to simulate a real-world e-commerce flow, handling data fetching from external APIs, managing shopping cart state, and processing test payments securely.

**Key Technical Implementations:**
- **External Data Consumption:** Dynamically fetches game metadata (ratings, images, descriptions) using the **RAWG Video Games API**.
- **Payment Gateway:** Implements **Stripe Checkout** for secure, server-side transaction handling.
- **Authentication:** Hybrid approach using **Firebase** for social login (Google) and **JWT (JSON Web Tokens)** for session management.
- **Database Design:** Uses **MongoDB Atlas** to store user profiles, purchase history, and wishlists.
- **State Management:** Complex React state handling for shopping cart logic and library synchronization.

---

## 🛠️ Tech Stack

| Frontend              | Backend                | Services & APIs        |
|:---------------------:|:---------------------:|:---------------------:|
| ⚛️ React (Vite)       | 🖥️ Node.js + Express  | 🌐 RAWG API (Data)    |
| 🎨 Tailwind CSS       | 🗃️ MongoDB Atlas      | 💳 Stripe (Payments)  |
| ⚡ Redux Toolkit      | 🛡️ JWT Middleware     | 🔐 Firebase (Auth)    |

---

## 🗺️ Architecture

```mermaid
graph TD
  U[🧑 User Client] -->|HTTP Requests| A[⚛️ React Frontend]
  A -->|API Routes| B[🖥️ Express Backend]
  B -->|Data Query| C[🌐 RAWG API]
  B -->|Payment Intent| D[💳 Stripe API]
  B -->|Store/Retrieve| E[☁️ MongoDB Atlas]
  A -->|OAuth Provider| F[🔐 Firebase]

  classDef frontend fill:#61dafb,stroke:#222,stroke-width:2px;
  classDef backend fill:#2ecc40,stroke:#222,stroke-width:2px;
  classDef api fill:#f44336,stroke:#222,stroke-width:2px;
  classDef stripe fill:#6772e5,stroke:#222,stroke-width:2px;
  classDef db fill:#47a248,stroke:#222,stroke-width:2px;
  classDef auth fill:#FFCA28,stroke:#222,stroke-width:2px;

  class A frontend
  class B backend
  class C api
  class D stripe
  class E db
  class F auth
---

## 🌐 Project Structure

```shell
gamearc/
 ├─ client/      # React + Vite + Tailwind (Frontend)
 ├─ server/      # Node.js + Express + MongoDB (Backend)
 └─ README.md
```

---

## ⚡ Quickstart

```bash
# 1. Clone
git clone https://github.com/<your-username>/gamearc.git && cd gamearc

# 2. Install dependencies
cd client && npm i
cd ../server && npm i

# 3. Configure .env in both folders (see .env.example for secrets)

# 4. Run
cd client && npm run dev
cd ../server && npm run dev
```

---


## 🌐 Project Structure

```shell
gamearc/
 ├─ client/      # React + Vite + Tailwind (Frontend)
 ├─ server/      # Node.js + Express + MongoDB (Backend)
 └─ README.md
```

---

## ⚡ Quickstart

```bash
# 1. Clone
git clone https://github.com/<your-username>/gamearc.git && cd gamearc

# 2. Install dependencies
cd client && npm i
cd ../server && npm i

# 3. Configure .env in both folders (see .env.example for secrets)

# 4. Run
cd client && npm run dev
cd ../server && npm run dev
```

---


