import random
from flask import Flask, request, make_response, jsonify    

app = Flask(__name__)

# game state:
s1 = 0
s2 = 0

@app.route("/init", methods=['GET'])
def initialize():
    print("INITIALIZED CALLED")
    s1, s2 = random.randint(1, 20), random.randint(1, 20)
    response = {
        "Pile 1": s1, 
        "Pile 2": s2
        }
    # response = make_response("Pile 1: " + str(s1) + " stones\nPile 2: " + str(s2) + " stones")
    # response.headers['Content-Type'] = 'text/plain'
    return jsonify(response)

@app.route('/turn', methods=['POST'])
def turn():
    user = request.form['user']
    pile = request.form['pile']
    num_stones = request.form['num_stones']

    if pile == 1 and s1 >= num_stones:
        s1 -= num_stones
    elif pile == 2 and s2 >= num_stones:
        s2 -= num_stones
    else:
        response = make_response("Invalid move")
        response.headers['Content-Type'] = 'text/plain'
        return response

    if s1 == 0 and s2 == 0:
        response = make_response("User " + user + " wins!")
        response.headers['Content-Type'] = 'text/plain'
        return response


