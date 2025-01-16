from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/send_notification', methods=['POST'])
def send_notification():
    data = request.json
    message = data.get('message')
    email = data.get('email')
    print(f"Received message: {message}, email: {email}")
    # Implement logic to send email here
    return jsonify({"status": "Notification sent", "message": message, "email": email})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
