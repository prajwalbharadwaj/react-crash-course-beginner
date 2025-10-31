# React Crash Course - Job Board App

A modern job board application built with React, following along with Brad Traversy Media React Crash Course. This project demonstrates core React concepts, including components, routing, state management, form handling, and working with APIs.

## 🚀 Features

- **Browse Jobs**: View all available job listings with details
- **Job Details**: Detailed view of individual job postings
- **Add Jobs**: Create new job listings through a form
- **Edit Jobs**: Update existing job listings
- **Delete Jobs**: Remove job listings
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Loading States**: Smooth loading indicators using react-spinners
- **Toast Notifications**: User-friendly notifications using react-toastify

## 🛠️ Tech Stack

- **React 19** - Latest React features and hooks
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **JSON Server** - RESTful API mock server
- **React Icons** - Icon library
- **React Spinners** - Loading animations
- **React Toastify** - Toast notifications

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-crash
```

2. Install dependencies:

```bash
pnpm install
```

## 🏃 Running the Application

Start the development server:

```bash
pnpm dev
```

Start the JSON server (in a separate terminal):

```bash
pnpm server
```

The app will be available at `http://localhost:8080`
The server will be available at `http://localhost:8000`

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Card.jsx
│   ├── Hero.jsx
│   ├── HomeCards.jsx
│   ├── JobListing.jsx
│   ├── JobListings.jsx
│   ├── Navbar.jsx
│   ├── Spinners.jsx
│   └── ViewAllJobs.jsx
├── layouts/           # Layout components
│   └── MainLayout.jsx
├── pages/             # Page components
│   ├── HomePage.jsx
│   ├── JobsPage.jsx
│   ├── JobPage.jsx
│   ├── AddJobPage.jsx
│   ├── EditJobPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx            # Main app component with routing
├── main.jsx           # Application entry point
├── jobs.json          # Mock database
└── index.css          # Global styles
```

## 🎯 Key Concepts Learned

- React Hooks (useState, useEffect, useNavigate, useParams)
- React Router configuration and navigation
- Form handling and submission
- CRUD operations (Create, Read, Update, Delete)
- Component composition and props
- Loader functions and data fetching
- Error handling and validation
- Responsive design with Tailwind CSS

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm server` - Start JSON Server
- `pnpm lint` - Run ESLint

## 📚 Course Reference

This project is built following the React Crash Course by Traversy Media.
