<!-- HEADER BANNER -->
<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=400&size=20&duration=5000&pause=1000&color=36BCF7FF&background=00000000&center=false&vCenter=false&lines=%F0%9F%8E%AE+Welcome+to+Gamearc!;Unleash+Your+Next-Gen+Game+Library" alt="Welcome animation for Gamearc: Unleash Your Next-Gen Game Library" />
</p>


<p align="center">
  <a href="https://gamearc-frontend2.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-00C853?style=for-the-badge&logo=google-chrome&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/Powered%20by-RAWG%20API-6772E5?style=for-the-badge&logo=rawg&logoColor=white" />
  <img src="https://img.shields.io/badge/Stripe%20Checkout-008CDD?style=for-the-badge&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase%20Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</p>

---

<p align="center" style="font-size:1.3em">
  <strong>🎮 Gamearc: Explore. Buy. Collect. Elevate Your Game Library.</strong><br>
  <em>The ultimate web platform to discover, purchase, and own trending games—fast, beautiful, and secure.</em>
</p>

---

<div align="center">
  <img src="https://i.postimg.cc/SRT2z3cZ/Screenshot-2025-05-18-020313.png" width="45%" alt="Game List View"/>
  &nbsp;
  <img src="https://i.postimg.cc/s2YMJvpG/Screenshot-2025-07-06-014346.png" width="45%" alt="Game Detail & Cart View"/>
</div>

---

## 🚀 Why Gamearc?

> <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=800&color=00C853&center=true&vCenter=true&width=600&lines=No+downloads.;No+signup+pain.;Just+log+in%2C+explore%2C+and+own+games+instantly." />

- 🎯 **Game Discovery:** Browse the latest hits & cult classics, powered by [RAWG API](https://rawg.io/apidocs).
- 🛒 **1-Click Cart + Stripe Checkout:** Seamless, secure payments in seconds.
- 🔒 **Google Login:** Fast, passwordless sign-in with Firebase.
- 📚 **Personal Library:** All your games, always yours, always synced.
- 🧠 **Smart Filters:** Find your next obsession by genre, rating, or price.
- ☁️ **Cloud-Synced:** Purchases stored on MongoDB Atlas—never lose your collection.
- 🌈 **Next-Level UI:** Modern, animated, fully responsive.

---

## 🛠️ Tech Power-Ups

| Frontend              | Backend                | Integrations           |
|:---------------------:|:---------------------:|:---------------------:|
| ⚛️ React (Vite)       | 🖥️ Node.js + Express  | 🌐 RAWG API           |
| 🎨 Tailwind CSS       | 🗃️ MongoDB Atlas      | 💳 Stripe Payments    |
| 🔐 Firebase Auth      | 🧾 JWT Protection     |    Firebase             |


---

## 🗺️ Architecture Flow

```mermaid
graph TD
  U[🧑 User] -->|Browse, Login, Purchase| A[⚛️ Gamearc Frontend]
  A -->|API Calls| B[🖥️ Node.js Backend]
  B -->|Fetch Game Data| C[🌐 RAWG API]
  B -->|Payment| D[💳 Stripe]
  B -->|User Purchases| E[☁️ MongoDB]
  A -->|Google Sign-In| F[🔐 Firebase]

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

## 💡 Inspired By

> <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=2500&pause=800&color=00C853&center=true&vCenter=true&width=600&lines=Steam+%7C+Epic+Games+Store+" />

---

<p align="center" style="font-size:1.5em">
  <b>Gamearc — Play. Collect. Conquer.</b>
</p>
