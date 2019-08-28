from flask import Flask, jsonify, request, render_template
from flask_pymongo import PyMongo 
from bson.objectid import ObjectId
from flask_cors import CORS 

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'employees'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/employees'
mongo = PyMongo(app)
CORS(app)

@app.route('/api/add', methods=['POST'])
def insert_employee():
    employees = mongo.db.new_employees
    employees.insert_one(request.json)

@app.route('/api', methods=['GET'])
def getEmployees():
    employees = mongo.db.new_employees
    just_names = []
    for employee in employees.find():
        just_names.append({'firstName': employee['firstName'], 'lastName': employee['lastName'], 'salary': employee['salary']})
    return jsonify(just_names)

if __name__=='__main__':
    app.run(debug=True)
