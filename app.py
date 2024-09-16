from flask import Flask, render_template, request, jsonify
from chatbot import script, chat_with_gpt

app = Flask(__name__)

# Define the default route to return the index.html file


@app.route("/")
def index():
    return render_template("index.html")

# Define the /api route to handle POST requests


@app.route("/api", methods=["POST"])
def api():
    # Get the message from the POST request
    message = request.json.get("message")

    if not message:
        return jsonify({"error": "No message provided"}), 400

    # Prepend the script to the user input
    query = script + message

    try:
        # Send the query to OpenAI's API
        response = chat_with_gpt(query)
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
    '''while True:
        user_input = input("User: ")
        query = script + user_input
        if user_input.lower() in ["quit", "exit", "bye"]:
            break

        response = chat_with_gpt(query)
        print("Chatbot: ", response)'''
