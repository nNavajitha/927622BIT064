from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")  # Allow React frontend on port 3000

@app.route("/api/stocks", methods=["GET"])
def get_stocks():
    # Simulated mock data
    data = [
        {"symbol": "AAPL", "price": 187.23},
        {"symbol": "GOOG", "price": 2839.45},
        {"symbol": "AMZN", "price": 3421.57}
    ]
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
