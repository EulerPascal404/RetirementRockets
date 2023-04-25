import json
import requests
from flask import Flask, jsonify, request

app = Flask(__name__)

employees = [
  { 'id': 1, 'name': 'Mary' },
  { 'id': 2, 'name': 'Harry' },
  { 'id': 3, 'name': 'Sally' }
]

user = [
  {},

]

nextEmployeeId = 4

@app.route('/employees', methods=['GET'])
def get_employees():
  return jsonify(employees)

@app.route('/employees/<int:id>', methods=['GET'])
def get_employee_by_id(id: int):
  employee = get_employee(id)
  if employee is None:
    return jsonify({ 'error': 'Employee does not exist'}), 404
  return jsonify(employee)

def get_employee(id):
  return next((e for e in employees if e['id'] == id), None)

def employee_is_valid(employee):
  for key in employee.keys():
    if key != 'name':
      return False
  return True

@app.route('/employees', methods=['POST'])
def create_employee():
  global nextEmployeeId
  employee = json.loads(request.data)
  if not employee_is_valid(employee):
    return jsonify({ 'error': 'Invalid employee properties.' }), 400

  employee['id'] = nextEmployeeId
  nextEmployeeId += 1
  employees.append(employee)

  return '', 201, { 'location': f'/employees/{employee["id"]}' }

@app.route('/employees/<int:id>', methods=['PUT'])
def update_employee(id: int):
  employee = get_employee(id)
  if employee is None:
    return jsonify({ 'error': 'Employee does not exist.' }), 404

  updated_employee = json.loads(request.data)
  if not employee_is_valid(updated_employee):
    return jsonify({ 'error': 'Invalid employee properties.' }), 400

  employee.update(updated_employee)

  return jsonify(employee)

@app.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id: int):
  global employees
  employee = get_employee(id)
  if employee is None:
    return jsonify({ 'error': 'Employee does not exist.' }), 404

  employees = [e for e in employees if e['id'] != id]
  return jsonify(employee), 200

import requests    

@app.route('/news/<string:stock>', methods=['GET'])
def get_news_by_stock(stock: string):
  articles = News(stock)
  return jsonify(articles)

def get_employee(id):
  return next((e for e in employees if e['id'] == id), None)

def employee_is_valid(employee):
  for key in employee.keys():
    if key != 'name':
      return False
  return True
 
def News(stock):
    # BBC news api
    # following query parameters are used
    # source, sortBy and apiKey
    api_key = "851e17dfa3654616b28493114a1781e0"
    query_params = {
      "q": stock,
      "source": "google-news",
      "sortBy": "popularity",
      "apiKey": api_key,
    }
    main_url = "https://newsapi.org/v2/everything?"
    # fetching data in json format
    res = requests.get(main_url, params=query_params)
    open_bbc_page = res.json()
 
    # getting all articles in a string article
    article = open_bbc_page["articles"]
 
    # empty list which will
    # contain all trending news
    results = []
    return article
    for ar in article:
        print(ar)
        results.append(ar["title"])
         
    for i in range(len(results)):
         
        # printing all trending news
        print(i + 1, results[i])          

app.run()