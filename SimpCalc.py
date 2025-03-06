from flask import Flask, request, jsonify
from flask_cors import CORS

app= Flask(__name__)
CORS(app)

@app.route('/calc', methods=['POST'])

def calc():
      data= request.get_json()
      if not data or "n1" not in data or "n2" not in data or "op" not in data:
            return jsonify({"error": "INVALID INPUT!!!"})
      x= float(data["n1"])
      y= float(data["n2"])
      oper= data["op"]
      if oper=='+':
            return jsonify({"r": x+y})
      elif oper=='-':
            return jsonify({"r": x-y})
      elif oper=='*':
            return jsonify({"r": x*y})
      elif oper=='/':
            return jsonify({"r": x/y})
      elif oper=='//':
            return jsonify({"r": x//y})
      elif oper=='%':
            return jsonify({"r": x%y})
      
if __name__=="__main__":
      app.run(port= 5000, debug= True)