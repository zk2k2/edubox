from flask import Flask, jsonify, request
from scripts.create_container import create_instance
from scripts.stop_container import stop_container
from scripts.secrets import getsecrets
app = Flask(__name__)


@app.route('/createVm', methods=['POST'])
def get_incomes():
    secret=request.get_json()["secret"]
    print(secret)
    if secret!=getsecrets():
        return jsonify({"result":"Only admin can access this !"})
    vmcontent=create_instance()
    return jsonify(vmcontent)


@app.route('/stopVm', methods=['POST'])
def add_income():
    secret=request.get_json()["secret"]
    if secret!=getsecrets():
        return jsonify({"result":"Only admin can access this !"})
    vmid=request.get_json()["id"]
    result=stop_container(vmid)
    return jsonify({"result":result})