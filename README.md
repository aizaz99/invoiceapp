# Invoice App 🧾


## 🔧 Tech Stack

### Backend
- **NestJS** – Modular and testable Node.js framework
- **Prisma ORM** – Type-safe database access
- **PostgreSQL** – Relational database
- **RESTful API** – Exposes `/invoices`, `/invoices/:id`
- **CORS Enabled** – Connects securely to frontend
- **JWT-ready setup** – Easily extendable for secure routes

### Frontend
- **Vite + React (JavaScript)** 
- **Material UI (MUI)**
- **React Query** – Efficient data fetching and caching
- **ClerkJS** – Authentication and session management (Secure Login Logout without building it from scratch)
- **Custom Theme** – Blue & grey palette using `ThemeProvider`


## ✨ Features

- ✅ Secure login via Clerk
- ✅ Sign out functionality (top-right corner)
- ✅ User avatar via Clerk's `UserButton`
- ✅ Responsive invoice table using MUI
- ✅ Clickable rows with modal pop-up for invoice detail
- ✅ Clean blue/grey color scheme
- ✅ Data fetched using React Query (with loading/error states)
- ✅ Environment variables protected via `.env`

---

## Prominent Challenges & Solutions

Prominent Challenges and solutions:
1- Clerk login showed blank screen | Fixed by setting Clerk's dev host to `http://localhost:5173` and adding custom paths for sign-in |

2- CORS blocked frontend/backend connection | Enabled `app.enableCors()` in NestJS and pointed to `5173` |

3-Git error: `'server/' does not have a commit checked out` | Resolved by removing nested `.git` in `/server` folder |

4- Setting up ClerkJS and setting it to Localhost 5173 instead of localhost 3000



### 🔧 Backend
Terminal
cd server
npm install
npx prisma db push
node prisma/seed.js
npm run start:dev

Client -
Cd Client
Npm install
Npm run Dev 
