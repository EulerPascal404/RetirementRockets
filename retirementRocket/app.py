import json
import requests
from flask import Flask, jsonify, request
import numpy as np
import matplotlib.pyplot as plt

app = Flask(__name__)

employees = [
  { 'id': 1, 'name': 'Mary' },
  { 'id': 2, 'name': 'Harry' },
  { 'id': 3, 'name': 'Sally' }
]

user = {
  'name': 'Aditya',
  'salary': 120000, 
  'savings_percent': .1,
  'savings_amount': 0,
  'year': 40,
  'interest_rate': .1,
  'tax_rate': .3,
  'inflation_rate': .2,
  'total': 100000,
  'raise_rate': .1,
  'interest': [],
  'inf': [],
  'years_list': [],
  'age': 20,
  'assets': 100000,
}

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

#Returns an array of articles on "stock" with [{author, content, description, publishedAt, source, title, url, urlToImage, }]
@app.route('/news/<string:stock>', methods=['GET'])
def get_news_by_stock(stock):
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
class Finance:
    def __init__(self, name, salary, savings_percent, savings_amount,
                 interest_rate, tax_rate, inflation_rate, year, total, raise_rate, age, assets):
        
        self.name = name
        self.salary = salary
        self.savings_percent = savings_percent
        self.savings_amount = savings_amount
        self.year = year
        self.interest_rate = interest_rate 
        self.tax_rate = tax_rate    
        self.inflation_rate = inflation_rate
        self.total = total
        self.raise_rate = []
        self.interest = []
        self.inf = []
        self.years_list = []
        self.age = age
        self.assets = assets

    # This code produces the same interest and inflation rate for both IRA and 401k 
    #because people are investing in both their IRA and 401k in the same years
    #It is assumed that they are making the same returns and that the inflation
    #will be the same.      
    def rates(self, years, mean_interest = .05, std_interest = .1, mean_inflation = .03, std_inflation = .005, mean_raise = .04, std_raise = .01):
        self.interest = []
        self.years_list = []
        self.inf = []
        for i in range(0,years):
            self.interest.append(np.random.normal(mean_interest, std_interest))
            self.inf.append(np.random.normal(mean_inflation, std_inflation))
            self.years_list.append(i) #keep list of years to plot
            self.raise_rate.append(np.random.normal(mean_raise, std_raise))
         
    
    #401k calculations 
    def four01k(self,salary,savings_percent,years,total,age):
        total_list = []
        savings_amount = 0
        #Maximum amount allowed by IRA before age 50 = 19000
        savings_max = 19000

        discount_list = []
        discount = 0
        savings_max_inflated = 0
        
        for i in range(0,years):
            savings_amount = salary * savings_percent
            if age+i == 50:
                savings_max = savings_max + 6500
                
            #to index the maximum savings allowed to inflation
            savings_max_inflated = savings_max * (1+self.inf[i])
            if savings_max_inflated >= (savings_max+500):
                savings_max = savings_max + 500
            
            #you cannot save more than the max
            if savings_amount > savings_max:
                savings_amount = savings_max
                
            salary = salary * (1 + self.raise_rate[i])
            total = (savings_amount + total) * (1+self.interest[i])
            total_list.append(total)
            discount = total
                
            #discount for inflation
            for j in range(0,len(total_list)):
                discount = discount/(self.inf[j]+1)
            discount_list.append(discount)   

        return total_list, discount_list
    #IRA Calculations
    def IRA(self,savings_amount,total,years,age):
        total_list = []
        a = savings_amount
        T = total
        discount_list=[]
        
        #This will calculate the amount one can save in the IRA given the parameters
        for i in range(0,years):
            T = (T + savings_amount) * (1+ self.interest[i])
            a = a*(1+self.inf[i])
            
            #To contribute an extra $1000 it he/she is over 50
            if age == 50:
                savings_amount = savings_amount + 1000
                
            #To index the contributions to inflation
            if a >= (savings_amount+500):
                savings_amount = savings_amount + 500
            total_list.append(T)
            discount = T
            
            for j in range(0,len(total_list)):
                discount = discount/(self.inf[j]+1)
            discount_list.append(discount)
            age += 1 
  
        return total_list, discount_list
    def assetReturns(self, assets, years, age):
      total_list = []
      T = assets
      discount_list=[]
      
      for i in range(0,years):
          T = T * (1+ self.interest[i])
          total_list.append(T)
          discount = T
          
          for j in range(0,len(total_list)):
            discount = discount/(self.inf[j]+1)
          discount_list.append(discount)
          age += 1 
      return total_list, discount_list
    # Four different plot methods
    # Plot one line for savings IRA / 401k / Assets
    def plot_of_savings(self, plot_data, title):
        plt.plot(self.years_list,plot_data)
        plt.xlabel("Years")
        plt.ylabel("Amount")
        plt.title(("Potential Growth of", title, " over Years"))
        plt.show()
        
    # plot many lines for savings IRA / 401k  
    def plot_more_runs(self,plotdata,iters,title):
        for i in range(0,iters):
            plt.plot(self.years_list,plotdata[i])
        plt.xlabel("Years")
        plt.ylabel("Amount")
        plt.title(("Potential Growth of", title, "over Years"))
        plt.show()
    
    #Plot with shading between maximum and minimum line    
    def plot_more_runs_with_range(self, plotdata, max_list, min_list, iters, title):
        for i in range(0,iters):
            plt.plot(self.years_list,plotdata[i])
        plt.fill_between(self.years_list,min_list,max_list, alpha = 0.3)
        plt.xlabel("Years")
        plt.ylabel("Amount")
        plt.title(("Potential Growth of", title, "over Years"))
        plt.show()
        
    #Plot with shading between maximum and minimum like with the average line  
    def plot_avg_max_min(self, max_list,min_list, avg_list, title):
        plt.plot(self.years_list,max_list)
        plt.plot(self.years_list,min_list)
        plt.plot(self.years_list,avg_list)
        plt.fill_between(self.years_list,max_list, min_list, alpha =0.3)
        plt.xlabel("Years")
        plt.ylabel("Amount")
        plt.title(("Potential Growth of", title, "over Years"))
        plt.show()






app.run()