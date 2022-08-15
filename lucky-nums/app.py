import requests
from random import randrange
from flask import Flask, render_template, request, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = False
app.config["SECRET_KEY"] = "chickens123"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
debug = DebugToolbarExtension(app)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def get_lucky_num():
    errors = {}
    params = request.get_json()
    name, email, color, year = (
        params["name"].strip(),
        params["email"].strip(),
        params["color"].strip(),
        params["year"],
    )
    if name == None:
        errors["name"] = "This field is required."
    if email == None:
        errors["email"] = "This field is required."
    if color not in ["red", "green", "orange", "blue"]:
        errors["color"] = "Invalid value, must be one of: red, green, orange, blue."
    if year < 1900 or year > 2000:
        errors["year"] = "Invalid year. Value must be between 1900 and 2000"

    if errors.keys():
        return jsonify(errors=errors)
    else:
        res_num = requests.get(f"http://numbersapi.com/{randrange(1, 100)}/trivia?json")
        num_data = res_num.json()
        res_year = requests.get(f"http://numbersapi.com/{year}/year?json")
        year_data = res_year.json()
        return jsonify(
            num={"fact": num_data["text"], "num": num_data["number"]},
            year={"fact": year_data["text"], "year": year_data["number"]},
        )
