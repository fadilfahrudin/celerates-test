# Celerates - Frontend Engineer Technical Assessment

## 📌 Project Overview
This project is a technical assessment for a frontend engineer role at Celerates. It is built using **Next.js 14**, **Zod**, **react-hook-form**, **Tailwind CSS**, **Shadcn UI**, and several dependencies for generating **PDF documents**. The application fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com) using React's built-in context for state management.

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```bash
git remote add origin https://github.com/fadilfahrudin/celerates-test.git
cd celerates-test
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## ⚙️ Environment Variables
Create a `.env` file in the root directory and add the following:

```env
NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
```

### 🔹 Explanation:
- `NEXT_PUBLIC_API_BASE_URL`: The base URL for the JSONPlaceholder API.

---

## 🔗 API Documentation
This project consumes data from **JSONPlaceholder**:

| Endpoint | Description |
|----------|-------------|
| `GET /users` | Fetches a list of users |
| `GET /users/:id` | Fetches details of a single user |

Example API call in the project:
```ts
fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`)
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📌 Key Decisions & Assumptions
1️⃣ **State Management:** Uses **React Context API** instead of Redux, since the application is simple and does not require complex state management.
2️⃣ **PDF Generation:** Uses `@react-pdf/renderer` for generating PDFs dynamically.
3️⃣ **Form Handling & Validation:** Uses `react-hook-form` and `Zod` for form validation and type safety.
4️⃣ **Styling:** Uses `Tailwind CSS` and Shadcn UI for rapid styling and consistent design.
5️⃣ **Next.js 14:** Utilized for server-side rendering (SSR) and performance optimizations.

---

## 🎯 Features
✅ Fetch user data from JSONPlaceholder
✅ Display user details & editable
✅ Generate a downloadable **PDF** with user details
✅ Form handling with validation using `react-hook-form`
✅ Responsive UI with Tailwind CSS & Shadcn UI components

---

## 📜 License
This project is licensed under the MIT License.

