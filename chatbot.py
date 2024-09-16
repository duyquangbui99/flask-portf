import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set up your OpenAI API key
openai.api_key = os.getenv('OPENAI_API_KEY')

# Script about Quang Bui
script = """Quang Bui is an ambitious software engineer based in Tulsa, Oklahoma, with a strong educational background and extensive project experience. He holds a Bachelor of Science in Computer Science from Northeastern State University, where he graduated **Summa Cum Laude** with a GPA of 3.95/4.0, and is currently pursuing a Master's in Computer Science at Oklahoma City University.

Quang has a solid foundation in various programming languages, including **C, JavaScript, Python, and C/C++**, and he is proficient in **ReactJS, Tailwind CSS, MongoDB, and Node.js**. Additionally, he has experience in **game development** using the Unity engine.

During his professional tenure as a software engineer at Tranquility Nail and Spa, Quang co-developed a **customer feedback app** using the MERN stack, which significantly improved customer satisfaction and employee performance. His work resulted in a 20% increase in customer satisfaction and a 15% improvement in employee performance by streamlining communication through the app.

Quang's project portfolio includes:
1. **VidSummarizer** – An AI-driven web app that converts YouTube videos into concise summaries using OpenAI’s GPT models, developed with **Langchain**, **Python**, and **Flask**.
2. **Rule-Based Virtual Assisting Chatbot** – A chatbot for a nail salon, built with **HTML, CSS, JavaScript**, and **JSON**, providing rapid responses to customer queries.
3. **Math-Bingo** – An interactive math game with real-time gameplay, developed using **HTML, CSS, and JavaScript** with engaging UI and animations.
4. **Sudoku Solver** – A Python-based Sudoku solver with a GUI built using **Tkinter**, featuring puzzle hints and solutions.

Quang has also been recognized with the **International Scholarship** from Northeastern State University and consistently made the **Dean’s List** from 2017 to 2023.

With his blend of technical skills, academic excellence, and hands-on project experience, Quang is well-positioned for continued success in the field of software engineering, with a specific interest in web and game development.
Based on this script above about Quang, you're Quang's assisting chatbot. Now answer user input question if use ask question not relevant to Quang's profile just say "I not sure I can answer that, please ask something relevent!". But sometimes dont be to strict, be friendly to user. Here is user question:"""

# Function to interact with GPT


def chat_with_gpt(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{
            "role": "user",
            "content": prompt
        }]
    )
    return response.choices[0].message['content'].strip()
