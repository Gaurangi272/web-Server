# 🌐 Node.js Web Server

A simple web server built using Node.js core modules (`http`, `fs`, and `path`) without using any external frameworks like Express.
The project demonstrates how to create a basic HTTP server, implement routing, serve HTML pages, and handle error responses.

---

## 🚀 Features

* Built using Node.js core modules only
* Serves multiple HTML pages
* Custom routing using `req.url`
* Handles the following routes:

  * **Home** (`/`)
  * **About** (`/about`)
  * **Contact** (`/contact`)
* Returns a custom **404 Page Not Found** response for invalid routes
* Returns **500 Internal Server Error** if an HTML file cannot be read
* Beginner-friendly project to understand how web servers work internally

---

## 🛠️ Technologies Used

* Node.js
* HTTP Module
* File System (fs)
* Path Module
* HTML

---

## 📁 Project Structure

```text
web-Server/
│
├── home.html
├── about.html
├── contact.html
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Gaurangi272/web-Server.git
```

Navigate to the project folder:

```bash
cd web-Server
```

Start the server:

```bash
node server.js
```

The server will start at:

```text
http://localhost:4000
```

---

## 🌐 Available Routes

| Route           | Description                           |
| --------------- | ------------------------------------- |
| `/`             | Displays the Home page                |
| `/about`        | Displays the About page               |
| `/contact`      | Displays the Contact page             |
| Any other route | Displays a 404 Page Not Found message |

---

## 💡 Concepts Practiced

* Creating an HTTP server using `http.createServer()`
* Routing requests using `req.url`
* Reading files asynchronously with `fs.readFile()`
* Using the `path` module for file paths
* Sending HTTP status codes (`200`, `404`, `500`)
* Setting HTTP response headers
* Serving static HTML files
* Basic backend routing without Express

---

## 📷 Demo

After running the application:

* `http://localhost:4000/` → Home Page
* `http://localhost:4000/about` → About Page
* `http://localhost:4000/contact` → Contact Page
* Any invalid URL → 404 Page Not Found

---

## 🎯 Learning Outcome

This project helped me understand the fundamentals of how a Node.js web server works without relying on frameworks. It covers request handling, routing, file serving, HTTP status codes, and error handling, providing a strong foundation before moving to Express.js.

---

## 👩‍💻 Author

**Gaurangi**

GitHub: https://github.com/Gaurangi272
