import subprocess
from scripts.utils import get_random_port,save_ports_id,read_ports_id,get_random_password
from scripts.stop_container import stop_container


used_port=read_ports_id()

def create_instance(container_name):
    password=get_random_password()
    port=get_random_port(used_port)
    try:
        P = subprocess.Popen(f"docker run -itd -p {port}:6080 {container_name}", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        container_id, stderr = P.communicate()
        container_id=container_id[:-1].decode()
        if P.returncode ==0:
                print(used_port)
                used_port[container_id]=port
                save_ports_id(used_port)
                return container_id,port,password
    except:
        return 0,0,0
    
if __name__=="__main__":
    print(create_instance())
    