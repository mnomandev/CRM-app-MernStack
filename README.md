# CustomerConnect CRM App - MERN

> CustomerConnect CRM is a comprehensive Customer Relationship Management (CRM) application designed to streamline customer data management, sales processes, and team collaboration. Built with the MERN stack (MongoDB, Express, React, Node.js), this application provides robust features for managing customer interactions, sales pipelines, and generating insightful reports.


## Features

### 1. User Roles & Authentication

- **Admin:** Full access to manage users, view all customer data, and modify system settings.
- **Sales Representative:** Manage personal customer data, log interactions, and update sales statuses.
- **Manager:** View and manage team customer data, generate reports, and analyze sales trends.
- **Authentication:** Secure login with JWT (JSON Web Token), password encryption using bcrypt, and role-based access control (RBAC).

### 2. Customer Management

- **Customer Data:** Manage customer information including Name, Contact Information, Company, Address, Industry, and Notes.
- **CRUD Operations:** Create, Read, Update, and Delete customers.
- **Search and Filter:** Find customers by various criteria such as name, company, and industry.

### 3. Customer Interaction Logs

- **Interaction Logs:** Record interactions like meetings, calls, and emails with fields for Interaction Type, Date, Time, and Description.
- **Timeline View:** Visualize a timeline of interactions for each customer.

### 4. Sales Pipeline Management

- **Lead Management:** Add and manage leads with fields for Lead Name, Contact Information, Source, Status, and assignment to sales representatives.
- **Opportunity Tracking:** Track sales opportunities with fields for Opportunity Name, Value, Stage, and Expected Close Date.

### 5. Reporting & Analytics

- **Sales Reports:** Generate reports on sales performance with metrics such as Total Sales, Conversion Rate, Average Deal Size, and Sales Cycle Length.
- **Customer Reports:** Track new customers, retention rates, and interaction frequency with visual charts and reports.

### 6. Notifications & Reminders

- **Task Reminders:** Schedule and manage tasks related to customer interactions with due dates and reminders via in-app notifications or email.
- **Event Notifications:** Notify users of important events such as upcoming meetings and lead status changes.

### 7. User Interface

- **Dashboard:** Overview of key metrics and recent activities with an intuitive and responsive design.
- **Responsive Design:** Ensure usability on both desktop and mobile devices.
- **Navigation:** Easy access to different sections including Dashboard, Customers, Leads, Reports, and Settings through a sidebar or top bar.

## Built With

- **Frontend:** React.js (Vite.js) (Tailwind CSS) (React Router) (@reduxjs/toolkit) (React Redux) ()
- **Backend:** Node.js (Express) (bcryptjs) (cors) (dotenv) (express-async-handler) (jsonwebtoken)
- **Database:** MongoDB (Atlas) (Mongoose) (MongoDB Compass)
- **Authentication:** JSON Web Tokens (JWT)
- **Version Control:** Git and GitHub

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM](https://www.npmjs.com/) - Node Package Manager

### Installation

1.Clone the repo

```sh
git clone https://github.com/mnomandev/CRM-app-MernStack.git
```

2.Install NPM packages

```sh
npm install
```

3.Create a `.env` file in the root directory and add the following

```sh
NODE_ENV = development
PORT = 5000
MONGO_URI = <your_mongodb_uri>
JWT_SECRET = <your_jwt_secret>
SALT = <your_salt>
```

4.Create a `.env` file in the client directory and add the following

```sh
VITE_SERVER_URL = <your_server_url>
VITE_CLIENT_URL = <your_client_url>
```

5.Run the app

```sh
npm run dev
```


## License

Distributed under the MIT License. See `LICENSE` for more information.



