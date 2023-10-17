# Codability Tutorials Courses Hub 📚

Master the art of building a highly scalable real-world MERN project. This project is a demonstration of creating an architecture that can potentially serve millions of users and is inspired by a successful real-world app.

## Tech Stack 🛠️

- **Frontend**: React and NextJS
- **Backend**: Node with Express
- **Database**: MongoDB (Using Mongo Atlas as Managed Database Service)
- **Hosting and Services**: AWS (S3 for file storage, SES for email, EC2 for hosting, IAM for identity and access management, Route 53 for domain management)

## Project Features 🌟

1. **User Authentication**: User registration and login system.
2. **Content Hub**: Users can post, manage, and share links to courses, videos, articles, etc.
3. **User Dashboard**: A place where users can update or delete the links they've shared.
4. **Massive Storage System**: Using AWS S3 for storing user uploaded images. It's scalable, reliable, and cost-effective.
5. **Email System**: Using AWS SES for email notifications.
6. **Hosting**: Backend API and Frontend are hosted on AWS EC2.

## Why this project? 🚀

- Target **millions** of potential users.
- Built with content creators in mind: instructors, YouTubers, bloggers, book authors, and more.
- Drive organic traffic and engagement by allowing users to share their content.
- Scalability: Both storage and database solutions are built to scale.
- Cost-effective: Leveraging AWS services to keep operational costs low.
- Simplicity in architecture: Separate backend and frontend for maintainability.
- Clean and straightforward request/response cycle.

## Project Structure 🗂️

The repository is split into two main directories:
- `client`: Contains all the frontend code built with React and NextJS.
- `server`: Houses the backend API built with Node and Express.

### Frontend Logic
- Fetch data from the API and display it to the user.
- Handle tasks like creating a new post and displaying success or error messages based on API responses.

### Backend Logic
- Handle GET and POST routes for various functionalities.
- Process requests, interact with the database, and send appropriate responses back to the frontend.
