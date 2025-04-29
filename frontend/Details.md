git config --global core.autocrlf input
# Work Done List -
## Backend
1. Authentication Backend

## Frontend
1. Navbar
2. Hero Section (image is remaining)
3. Footer 
4. Faqs
5. Authform [ Login and Signup ]
6. About Section 

# Remaining work
1. Module Page F/B
```
<Navbar/>
<ModuleHero/>
<ModuleList/> → <ModuleCard/>
```
2. Quiz Page
3. Logout backend integration
4. Research regarding topics and ideation of the website overall








For a MERN (MongoDB, Express, React, Node.js) project, a well-organized directory structure is crucial to manage and scale the application effectively. Here’s a recommended directory structure that aligns with the nature of your project, which includes educational content and quizzes:

### Directory Structure

```
mern-quiz-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── quizController.js
│   │   ├── userController.js
│   │   └── subjectController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Quiz.js
│   │   └── Subject.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── quizRoutes.js
│   │   ├── userRoutes.js
│   │   └── subjectRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── utils/
│   │   └── helpers.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── QuizCard.js
│   │   │   ├── QuizList.js
│   │   │   ├── Question.js
│   │   │   ├── Dropdown.js
│   │   │   └── SubjectCard.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── QuizPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── AboutPage.js
│   │   │   └── SubjectPage.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── QuizContext.js
│   │   │   └── SubjectContext.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── quizService.js
│   │   │   └── subjectService.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

### Explanation

#### Backend (`/backend`)

1. **config/**: Configuration files, like database configuration.
   - `db.js`: MongoDB connection setup.

2. **controllers/**: Controllers for handling requests and responses.
   - `authController.js`: Handles authentication-related actions.
   - `quizController.js`: Handles quiz-related actions.
   - `userController.js`: Handles user-related actions.

3. **models/**: Mongoose schemas and models.
   - `User.js`: User schema.
   - `Quiz.js`: Quiz schema.

4. **routes/**: Express routes for different parts of the API.
   - `authRoutes.js`: Routes for authentication.
   - `quizRoutes.js`: Routes for quizzes.
   - `userRoutes.js`: Routes for user management.

5. **middleware/**: Custom middleware functions.
   - `authMiddleware.js`: Authentication middleware.
   - `errorMiddleware.js`: Error handling middleware.

6. **utils/**: Utility functions and helpers.
   - `helpers.js`: Common helper functions.

7. **server.js**: Entry point for the backend application.
8. **.env**: Environment variables for sensitive configurations.
9. **package.json**: Backend dependencies and scripts.
10. **README.md**: Documentation for the backend.

#### Frontend (`/frontend`)

1. **public/**: Static files.
   - `index.html`: Main HTML file.

2. **src/**: Source files for the React application.
   - **assets/**: Static assets like images.
     - `images/`: Directory for images.
   - **components/**: Reusable React components.
     - `Navbar.js`: Navigation bar component.
     - `QuizCard.js`: Card component for displaying quiz information.
     - `QuizList.js`: Component for displaying a list of quizzes.
     - `Question.js`: Component for individual questions.
     - `Dropdown.js`: Dropdown component for question options.
   - **pages/**: Page components.
     - `HomePage.js`: Homepage component.
     - `QuizPage.js`: Quiz page component.
     - `LoginPage.js`: Login page component.
     - `RegisterPage.js`: Registration page component.
     - `AboutPage.js`: About page component.
   - **context/**: Context API for managing global state.
     - `AuthContext.js`: Authentication context.
     - `QuizContext.js`: Quiz-related context.
   - **services/**: Services for making API calls.
     - `authService.js`: Service for authentication-related API calls.
     - `quizService.js`: Service for quiz-related API calls.
   - `App.css`: Global CSS styles.
   - `App.js`: Root component.
   - `index.css`: Base CSS styles.
   - `index.js`: Entry point for the React application.

3. **.env**: Environment variables for frontend configurations.
4. **vite.config.js**: Vite configuration file.
5. **package.json**: Frontend dependencies and scripts.
6. **README.md**: Documentation for the frontend.

#### Root Directory

- **.gitignore**: Specifies files to be ignored by Git.
- **README.md**: Documentation for the entire project.

### Setting Up

1. **Initialize Backend**:
   - Navigate to the `backend` directory and run:
     ```sh
     npm install
     npm run dev
     ```

2. **Initialize Frontend**:
   - Navigate to the `frontend` directory and run:
     ```sh
     npm install
     npm run dev
     ```

### Key Points

- Use **Express** for the backend to handle API routes and middleware.
- Use **React** for the frontend to build the user interface.
- Use **Mongoose** to interact with MongoDB.
- Separate concerns by using controllers, models, and routes in the backend.
- Organize React components, pages, and context effectively in the frontend.
- Store configuration settings in `.env` files for both backend and frontend.

This structure will help you build, manage, and scale your MERN stack application efficiently.