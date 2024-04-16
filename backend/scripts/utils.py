from random import randint
import json
def get_random_port(used_port_id):
    port=randint(3000,5000)
    while port  in used_port_id.values():
        port=randint(3000,5000)
    return port

def save_ports_id(ports_id):
    open("used_port.txt",'w').write(json.dumps(ports_id))
def read_ports_id():
    ports_id_string=open("used_port.txt").read()
    used_port_id={}
    if len(ports_id_string)!=0:
        used_port_id=json.loads(ports_id_string)
    return used_port_id
