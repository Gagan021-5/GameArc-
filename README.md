# 🎮 Gamearc

**Gamearc** is a fully functional, full-stack gaming web platform that lets users explore trending games, securely purchase them, and build their own digital game library.

> ✨ Live Site: [https://gamearc-frontend2.onrender.com](https://gamearc-frontend2.onrender.com)

---

## 🚀 Features

- 🔍 **Explore Games** using the [RAWG API](https://rawg.io/apidocs)
- 🎮 **Add to Cart** and filter by genre, rating, and price
- 🛒 **Stripe Checkout** for seamless purchasing
- 🔐 **Firebase Authentication** (Google Sign-In)
- 📚 **Personal Game Library** after login
- ☁️ **MongoDB Atlas** to store user purchases
- 📦 Fully deployed on **Render**

---

## 🖼️ UI Previews

<table>
  <tr>
    <td><img src="https://i.postimg.cc/SRT2z3cZ/Screenshot-2025-05-18-020313.png" alt="Game List View" width="100%" /></td>
    <td><img src="https://i.postimg.cc/s2YMJvpG/Screenshot-2025-07-06-014346.png" alt="Game Deta il & CartView" width="100%" /></td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔐 Firebase Authentication
- 🔗 Axios for API requests
- 🌐 RAWG API Integration

### Backend
- 🖥️ Node.js + Express
- 🗃️ MongoDB Atlas
- 🧾 JWT for route protection
- 💳 Stripe Payments (Checkout Sessions)

---

### Architecture Flow Diagram

```mermaid
graph TD
  A[React + Vite Frontend] -->|User auth & API calls| B[Node.js + Express Backend]
  B -->|Fetches game data| C[RAWG API]
  B -->|Processes payments| D[Stripe Checkout]
  B -->|Stores user data| E[MongoDB Atlas]
  A -->|Authenticates via| F[Firebase Authentication]
  style A fill:#61dafb,stroke:#000,stroke-width:2px
  style B fill:#339933,stroke:#000,stroke-width:2px
  style C fill:#f44336,stroke:#000,stroke-width:2px
  style D fill:#6772e5,stroke:#000,stroke-width:2px
  style E fill:#47a248,stroke:#000,stroke-width:2px
  style F fill:#ffca28,stroke:#000,stroke-width:2px



