
# Subscription-Tracker-API 💻

Subscription Tracker API is a backend service built with Node.js, Express, and MongoDB to manage user subscriptions efficiently.
It allows users to add, update, delete, and view subscription plans with details like price, renewal date, and category.
Designed as a RESTful API, it serves as a solid foundation for building finance tracking or SaaS management applications.

## 🔋 Features
👉 **User Authentication**: JWT-based user registration and login

👉 **Subscription Management**: CRUD operations for subscriptions

👉 **Payment Integration**: Stripe/PayPal integration

👉 **Notification System**: Email reminders for renewals

👉 **Rate Limiting**: API protection and security

👉 **Real-time Tracking**: Dashboard for subscription analytics






## 🛠️ Tech Stack  

### Backend  
- Node.js – Runtime environment for building the server  
- Express.js – Framework for handling routes and APIs  

### Database  
- MongoDB – NoSQL database for storing subscription details  
- Mongoose – ODM for managing MongoDB models and queries  

### Authentication & Security  
- JWT (JSON Web Token) – For secure user authentication  
- bcrypt.js – For hashing and securing passwords  
- dotenv – For managing environment variables  

### Deployment  
- Render – Cloud platform for deployment  
- GitHub – Code hosting and version control  

### Other Tools  
- Postman – For API testing  
- npm – Package management  

**Prerequisites**
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB/PostgreSQL
- Git


## API Endpoints 🔃

Here’s a list of available API routes for the Subscription Tracker:

### User Routes
- `POST /api/users/register` → Register a new user  
- `POST /api/users/login` → Login user and get token  
- `GET /api/users/profile` → Get logged-in user profile (requires auth)  

### Subscription Routes
- `POST /api/subscriptions` → Create a new subscription  
- `GET /api/subscriptions` → Get all subscriptions for logged-in user  
- `GET /api/subscriptions/:id` → Get subscription by ID  
- `PUT /api/subscriptions/:id` → Update subscription by ID  
- `DELETE /api/subscriptions/:id` → Delete subscription by ID  

### Notification Routes
- `GET /api/notifications` → Get all notifications for logged-in user  
- `PUT /api/notifications/:id/read` → Mark a notification as read  



## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Devrajsahani/Subscription-tracker-2/41e39c05580e99032490d090d7d7ebf77052439b/Screenshot%202025-08-17%20135451.png)

![App Screenshot](https://raw.githubusercontent.com/Devrajsahani/Subscription-tracker-2/41e39c05580e99032490d090d7d7ebf77052439b/Screenshot%202025-08-17%20141710.png)

![App Screenshot](https://raw.githubusercontent.com/Devrajsahani/Subscription-tracker-2/41e39c05580e99032490d090d7d7ebf77052439b/Screenshot%202025-08-24%20025001.png)


![App Screenshot](https://raw.githubusercontent.com/Devrajsahani/Subscription-tracker-2/41e39c05580e99032490d090d7d7ebf77052439b/Screenshot%202025-08-25%20131456.png)
## Deployment

The project is live here:  
👉 [https://production-level-api.onrender.com](https://your-app-name.onrender.com)


## Author

- [@ Devrajsahani](https://github.com/Devrajsahani)


## Appendix

Any additional information goes here

