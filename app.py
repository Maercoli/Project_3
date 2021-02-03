# import necessary libraries
from models import create_classes
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import (
    Flask,
    render_template,
    url_for,
    json,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
#app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "postgres://xbrqktwe:E_nywn4IJhz89kqxwG3M498kv8qnq4Z6@rajje.db.elephantsql.com:5432/xbrqktwe"
engine = create_engine('postgres://xbrqktwe:E_nywn4IJhz89kqxwG3M498kv8qnq4Z6@rajje.db.elephantsql.com:5432/xbrqktwe')
# Remove tracking modifications
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

Base = automap_base()
Base.prepare(engine, reflect=True)
#summary = Base.classes.summary
session = Session(engine)

db = SQLAlchemy(app)

#Pet = create_classes(db)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


#@app.route("/api/main/torontocovidcases")
#def firstRoute(): 
    #data = db.session.query(Cases.City, Cases.Count).filter(Cases.city =="Toronto").all()
#    return jsonify(data)

#    if __name__ == "__main__":
#    app.run()



# Query the database and send the jsonified results
#@app.route("/send", methods=["GET", "POST"])
#def send():
#    if request.method == "POST":
#        name = request.form["petName"]
#        lat = request.form["petLat"]
# #        lon = request.form["petLon"]

#         pet = Pet(name=name, lat=lat, lon=lon)
#         db.session.add(pet)
#         db.session.commit()
#         return redirect("/", code=302)

#     return render_template("form.html")


# @app.route("/api/pals")
# def pals():
#     results = db.session.query(Pet.name, Pet.lat, Pet.lon).all()

#     hover_text = [result[0] for result in results]
#     lat = [result[1] for result in results]
#     lon = [result[2] for result in results]

#     pet_data = [{
#         "type": "scattergeo",
#         "locationmode": "USA-states",
#         "lat": lat,
#         "lon": lon,
#         "text": hover_text,
#         "hoverinfo": "text",
#         "marker": {
#             "size": 50,
#             "line": {
#                 "color": "rgb(8,8,8)",
#                 "width": 1
#             },
#         }
#     }]

#     return jsonify(pet_data)


if __name__ == "__main__":
    app.run()
