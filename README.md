# Mini Product Catalog Application

A mini product catalog application built with **React**, **Next.js 15**, **Tailwind CSS**, and **Supabase**. This project showcases front-end development, performance optimization, and optional AI integration — designed to demonstrate the skillset for a Senior Front-End Developer role at ClicTiv.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project)

### 🔗 Live Demo

👉 [View Live App](https://your-vercel-app-url.vercel.app)

---

## 🧰 Tech Stack

- **Frontend:** React, Next.js v15
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Backend:** Supabase (PostgreSQL)
- **Testing:** Jest
- **Deployment:** Vercel
- **Package Manager:** pnpm
  
---

📐 Database Schema
products Table

Column	Type	Constraints	Description
id	uuid	primary key	Unique product ID
name	text	not null	Product name
price	numeric	not null	Product price in USD
image_url	text	nullable	Link to product image
category	text	nullable	Product category
created_at	timestamp with time zone	default now()	Timestamp of creation
---

## 🛠️ Getting Started

### 1. Clone the Application Repo

```bash
git clone https://github.com/hoomanh1998/mini-product-catalog.git
cd mini-product-catalog
