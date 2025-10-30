# NC-News

A full-stack news application where users can browse, post, comment, and vote on articles.  
Built with **React**, **Node.js**, **Express**, and **PostgreSQL (via Supabase)**, with both frontend and backend deployed on **Render**.

---

## Table of Contents

1. [About the Project](#About-The-Project)
2. [Features](#features)
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [API Structure](#API-structure)  
6. [Folder Structure](#folder-structure)  

---

## About the Project

This project was completed as part of the **Northcoders JavaScript Bootcamp** in early 2025.  
It demonstrates a fully functional full-stack application with user authentication, topic filtering, article voting, and comments.

Key milestones in the project’s development:

1. **Backend setup:** Created RESTful API endpoints with Express and PostgreSQL, including database seeding and testing with Jest/Supertest.
2. **Frontend development:** Built a responsive React UI with React Router for navigation, Tailwind CSS for styling, and Axios for API communication.
3. **Integration:** Connected frontend to backend APIs, implemented voting and commenting features.
4. **Deployment:** Hosted backend and frontend on Render, using Supabase for the database.

---

## Features

- Browse articles by topic
- Read full articles with associated comments
- Post, edit, and delete comments
- Upvote and downvote articles
- Filter and sort articles by date or votes
- Responsive single-page application with clean design

---

## Tech Stack

**Frontend:** React, React Router, Axios, Tailwind CSS  
**Backend:** Node.js, Express, PostgreSQL (Supabase), Jest, Supertest  
**Deployment:** Render (frontend and backend), Supabase (database)  

---

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/Joe-Beaumont/nc-news.git
cd nc-news
```
2. Install dependencies:
```bash
cd backend
npm install
cd ../frontend
npm install
```
3. Set up environment variables in backend:
 - .env.test
   ```bash
   PGDATABASE=nc_news_test
   ```
 - .env.development
   ```bash
   PGDATABASE=nc_news
   ```
 - .env.production
   ```bash
   PGDATABASE=nc_news
   DATABASE_URL=postgresql://postgres.********:<YourPasswordHere>@aws-0-eu-west-2.pooler.supabase.com:6543/postgres
   ```
4. Seed the database:
```bash
cd backend
npm run setup-dbs
npm run seed
```
5. Start the development servers
 - backend
```bash
npm run start
```
 - frontend
```bash
npm run dev
```
---

## API Structure

| Method | Endpoint                              | Description                          |
| ------ | ------------------------------------- | ------------------------------------ |
| GET    | `/api/topics`                         | Get all topics                       |
| GET    | `/api/articles`                       | Get all articles                     |
| GET    | `/api/articles/:article_id`           | Get article by ID                    |
| GET    | `/api/articles/:article_id/comments`  | Get all comments for an article      |
| GET    | `/api/comments/:comment_id`           | Get a single comment by ID           |
| PATCH  | `/api/articles/:article_id`           | Increment or decrement article votes |
| PATCH  | `/api/comments/:comment_id`           | Increment or decrement comment votes |
| POST   | `/api/articles/:article_id/comments`  | Post a new comment                   |
| DELETE | `/api/comments/:comment_id`           | Delete a comment                     |
| GET    | `/api/articles?filter=:filter&by=:by` | Filter/sort articles by query        |

---

## Folder Structure

nc-news/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── package.json
│   └── ...
└── README.md
