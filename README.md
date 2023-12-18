# ⚡️ Syntactic 

### 👨🏽‍💻 Authors
- Oumar Siby: https://github.com/oumar-s
- Anup Thapa: https://github.com/devanup
- Alamin Miah: https://github.com/Alaminium
- Iris Shakya: https://github.com/irisshakya

### ✨ Description 
`Syntactic` is a learning platform that incorporates AI driven feedback and effective learning techniques such as active recall, interleaving, and spaced repetition to provide an efficient way to learn programming languages. Our goal is to prevent tutorial hell and reduce the amount of money and time it takes to learn a programming language. 

### 🌐 Live Site
The site is currently deployed [here](https://syntactic-71b1c.firebaseapp.com):
- Live site: https://syntactic-71b1c.firebaseapp.com

### 📁 Backend Repo
The backend repo is [here](https://github.com/oumar-s/Syntactic-Backend): 
- Syntactic-Backend: https://github.com/oumar-s/Syntactic-Backend

### ⚙ Technologies Used
- `React` for the front-end
- `Tailwind` for styling
- `Firebase` and `Flask` for the back-end
- `ChatGPT` for the AI features
- `Firebase` and `Heroku` for deployment

### 💨 To Get Started Locally
- Make sure you have a valid OpenAI api key.
- Please clone the backend repo as well.
- This project is heavily coupled with firebase, so you will need to create a firebase project and enable firestore and authentication. 
- Ensure that Firebase Firestore has the following collections: `Courses` with each document being named after the course code (e.g. `javascript`)
- Structure for each document in courses collection:  

    - id: string
    - title: string
    - syllabus: array of objects
        - chapter: string
        - topics: array of objects
            - id: string
            - name: string
            - pid: string
    

#### 🏃‍♀️ Running the app locally

For local development you will need two terminals open, one for the react-client and one for the flask backend.

_Clone_ this app, then:

```bash
# flask-backend terminal 1
python -m venv .venv       # Create a virtual environment
source .venv/bin/activate  # Activate the virtual environment (Linux/Mac)
.\.venv\Scripts\activate   # Activate the virtual environment (Windows)
pip install -r requirements.txt  # Install dependencies
# create a .env file and add the fibebase credentials and openai api key
flask run                  # Run the flask server
```

```bash
# react-client terminal 2
npm install               # Install dependencies
npm start              # Run the react client
```

    