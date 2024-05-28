from flask import Flask, jsonify, request
from scripts.create_container import create_instance
from scripts.stop_container import stop_container
from scripts.secrets import getsecrets
from os import getcwd
path_base=getcwd()
from BaseImages.create_specialized_images import Create_Special_VM as Vmcreator
from BaseImages.clone_base_images import clone_bases
app = Flask(__name__)
VM_builder=Vmcreator(path_base+"/BaseImages/")
clone_bases(getcwd())
Built_images=[]

@app.route('/createVm', methods=['POST'])
def get_incomes():
    request_json=request.get_json()
    print(request_json)
    if request_json["secret"]!=getsecrets():
        return jsonify({"result":"Only admin can access this !"})
    baseImage_name,languages=request_json["baseImage"],request_json["languages"]
    vmname=VM_builder.create_specialized_name(baseImage_name,languages)
    if vmname not in Built_images:
        VM_builder.prep_and_build(baseImage_name,languages)
    Built_images.append(vmname)
    vmcontent=create_instance(vmname)
    return jsonify(vmcontent)


@app.route('/stopVm', methods=['POST'])
def add_income():
    secret=request.get_json()["secret"]
    if secret!=getsecrets():
        return jsonify({"result":"Only admin can access this !"})
    vmid=request.get_json()["id"]
    result=stop_container(vmid)
    return jsonify({"result":result})

