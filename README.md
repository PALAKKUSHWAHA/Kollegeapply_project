# kollegeapply

LIVE DEMO: https://kollegeapply01.vercel.app/

Here is a clean, simple, interview-ready explanation** of your whole project exactly as required in the Web Development Intern Assessment.
university-landing-pages/
│
├── api/
│   ├── courses.json
│   ├── fees.json
│   ├── universities.json
│   └── server.js        (Optional Node.js API)
│
├── landing-page-1/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── assets/
│   │    ├── banner.jpg
│   │    └── logo.png
│
├── landing-page-2/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── assets/
│        ├── banner.jpg
│        └── logo.png
│
├── pipedream/
│   └── workflow.json   (Your Pipedream endpoint settings)
│
└── README.md

---

# ✅ **Project Explanation: API + Two Landing Pages + Pipedream Integration**

This project consists of **three major components**:

---

# **1️⃣ Two Single-Page Landing Pages (LP-1 & LP-2)**

You built **two separate admission landing pages** for two private universities:

* **LP-1: Amity University**
* **LP-2: Manipal University**

Each landing page contains:

### ✔ University Information

Overview, courses offered, fee structure, placements, facilities, etc.

### ✔ Action Buttons (CTAs)

* **Check Course-wise Fees**
* **Download Brochure**
* **Apply Now**

### ✔ Lead Form

The form includes:

* Full Name
* Email
* Phone Number
* State
* Course Interested
* Intake Year
* Consent Checkbox

The form is fully validated (phone = 10 digits, all fields required).

### ✔ AJAX Form Submission (No Page Refresh)

When the user clicks **Submit**, the data is:

1. Collected from the form
2. Sent to your **Pipedream API endpoint**
3. A success or failure message is shown instantly
4. The page does **not** reload

### ✔ Modal for Course-wise Fees

When the user clicks **“Check Course-wise Fees”**, a modal opens.
The modal dynamically loads fee details from your internal API (`fees.json`).

### ✔ Responsive Design

Both landing pages work on:

* Desktop
* Tablet
* Mobile

using Flexbox + Media Queries.

---

# **2️⃣ API Development (JSON-Based & Node.js Optional)**

You also created a small set of APIs that your landing pages consume.

These APIs are simple static JSON files, but structured like real backend endpoints.

### ✔ `universities.json`

Contains general data for each university (name, location, ranking, accreditation).

### ✔ `fees.json`

A structured JSON returning fee ranges for each course.

### ✔ `courses.json`

Nested JSON containing categories (Engineering, Management) and all available programs.

### ✔ (Optional) `server.js`

A Node.js Express server that returns the same JSON dynamically, useful if deployed on Render / Railway.

These APIs provide the “backend” for your landing pages.

---

# **3️⃣ Lead Capture Integration With Pipedream**

This is the central part of the assignment — real API integration.

### ✔ The landing page form sends data to a **Pipedream endpoint**:

Example payload:

```json
{
  "name": "Palak",
  "email": "palak@example.com",
  "phone": "9876543210",
  "state": "Uttar Pradesh",
  "course": "B.Tech",
  "year": "2025"
}
```

### ✔ Inside Pipedream you can:

* Store data in Google Sheets
* Send email notifications
* Trigger CRM entries
* Send WhatsApp messages
* Send your own response back to the website

### ✔ The response from Pipedream is shown to the user as:

* **Success: “Form Submitted Successfully!”**
* **Error: “Submission Failed!”**

All without reloading the page → **SPA behaviour**.

---

# 📁 **Project Structure Overview**

```
university-landing-pages/
│
├── api/
│   ├── courses.json
│   ├── fees.json
│   ├── universities.json
│   └── server.js (optional backend)
│
├── landing-page-1/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── landing-page-2/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
└── pipedream/
    └── workflow.json
```

---

# 🎯 **What This Project Demonstrates**

This project shows that you understand:

### ✔ Web Design

Creating modern, responsive UI/UX.

### ✔ Frontend Development

HTML, CSS, JavaScript, modals, form validation.

### ✔ API Handling

Fetching and displaying JSON data.

### ✔ Asynchronous Programming

Using `fetch()` to submit data and load content dynamically.

### ✔ Real Integration

Connecting a real backend workflow (Pipedream) with frontend.

### ✔ Deployment

Hosting pages on Netlify / Vercel with SSL.

---

# 🏆 **Perfect for Interview Explanation**

Below is a 30-second version you can say to an interviewer:

### ⭐ **Short Explanation**

> “I built two mobile-responsive landing pages for private universities, each containing full admission details, CTAs, and a lead form.
> The form sends user data to a Pipedream API through an asynchronous POST request without refreshing the page.
> I also created a small JSON-based API for fees, courses, and university details, which the landing pages fetch dynamically.
> The entire project is deployed with SSL and behaves like a real admissions funnel with lead capture and dynamic data loading.”

---
