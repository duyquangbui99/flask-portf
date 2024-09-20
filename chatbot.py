import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set up your OpenAI API key
openai.api_key = os.getenv('OPENAI_API_KEY')

# project
about_me = "Quang is a tech enthusiast and grad student at Oklahoma City University. With a strong educational background and extensive project experience. He holds a Bachelor of Science in Computer Science from Northeastern State University, where he graduated Summa Cum Laude with a GPA of 3.86/4.0, and is currently pursuing a Master's in Computer Science at Oklahoma City University. Quang has a solid foundation in various programming languages including C#, JavaScript, Python, and C/C++, and he is proficient in ReactJS, Tailwind CSS, MongoDB, and Node.js. Additionally, he has experience in game development using the Unity engine."
work_exp = " During his professional tenure as a software engineer at Tranquility Nail and Spa, Quang co-developed a customer feedback application using the MERN stack, which significantly improved customer satisfaction and employee performance. His work resulted in a 20% increase in customer satisfaction and a 15% improvement in employee performance by streamlining communication through the app."
project_one = " Project name : VidSummarizer, An AI-driven web app that converts YouTube videos into concise summaries using OpenAI’s GPT models, developed with Langchain, Python, and Flask."
project_two = " Project name: Rule-Based Virtual Assisting Chatbot, A chatbot for a nail salon, built with HTML, CSS, JavaScript, and data from JSON, providing rapid responses to customer queries."
project_three = " Project name: Math-Bingo, An interactive math game with real-time gameplay, developed using HTML, CSS, and JavaScript with engaging UI and animations."
project_four = " Project name: Sudoku Solver, A Python-based Sudoku solver with a GUI built using Tkinter, featuring puzzle hints and solutions."
about_me_two = " Quang has also been recognized with the International Scholarship from Northeastern State University and consistently made the Dean’s List from 2017 to 2023. With his blend of technical skills, academic excellence, and hands-on project experience, Quang is well-positioned for continued success in the field of software engineering, with a specific interest in web and game development."
sponsorship = " I am graduating in May 2026 and actively seeking a software engineering internship for the summer of 2025. I have CPT authorization and will apply for OPT post-graduation. For this internship, I do not require sponsorship and have work authorization ready for the summer of 2025."
main_query = " Based on this script above about Quang, you're Quang's assisting chatbot. Now answer user input question if use ask question not relevant to Quang profile, just say I am not sure I can answer that, please ask something relevent! But sometimes dont be to strict, don't have to tell about sponsorship if not asked, be friendly to user. Here is user question:"
# Script about Quang Bui
# script = about_me + " Quang's project portfolio includes:" + work_exp + project_one + project_two, project_three, project_four + query

script = about_me + about_me_two + work_exp + \
    project_one + project_two + project_three + \
    project_four + sponsorship + main_query
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
