from flask import Flask, jsonify, request
from flask_cors import CORS
from scripts.create_container import Run_containers
from scripts.stop_container import stop_container
from scripts.secrets import getsecrets
from os import getcwd

path_base = getcwd()
from BaseImages.create_specialized_images import Create_Special_VM as Vmcreator
from BaseImages.clone_base_images import clone_bases

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

VM_builder = Vmcreator(path_base + "/BaseImages/")
Built_images = []
VM_starter = Run_containers()


@app.route("/createVm", methods=["POST"])
def get_incomes():
    request_json = request.get_json()
    print(request_json)
    if request_json["secret"] != getsecrets():
        return jsonify({"result": "Only admin can access this !"})
    baseImage_name, languages = request_json["baseImage"], request_json["languages"]
    vmname = VM_builder.create_specialized_name(baseImage_name, languages)
    if vmname not in Built_images:
        VM_builder.prep_and_build(baseImage_name, languages)
    Built_images.append(vmname)
    vmcontent = VM_starter.Run_container(vmname, baseImage_name)
    print(vmcontent)
    return jsonify(vmcontent)


@app.route("/stopVm", methods=["POST"])
def add_income():
    secret = request.get_json()["secret"]
    if secret != getsecrets():
        return jsonify({"result": "Only admin can access this !"})
    vmid = request.get_json()["id"]
    result = stop_container(vmid)
    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(debug=True)
