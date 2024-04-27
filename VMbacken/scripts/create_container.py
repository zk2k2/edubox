import subprocess
from scripts.utils import get_random_port,save_ports_id,read_ports_id
from scripts.stop_container import stop_container


used_port=read_ports_id()

def create_instance():
    # return id of the newly created container and the password of the novnc
    port=get_random_port(used_port)
    try:
        P = subprocess.Popen(f"docker run -itd -p {port}:6080 chenjr0719/ubuntu-unity-novnc", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        container_id, stderr = P.communicate()
        if P.returncode ==0:
            print("Container is running successfully")
            container_id=container_id.decode()[:-1]
            P = subprocess.Popen(f"docker exec {container_id} cat /home/ubuntu/password.txt", shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            password_vnc, stderr = P.communicate()
            if P.returncode == 0:
                print("Password retreived ")
                used_port[container_id]=port
                save_ports_id(used_port)
                return container_id,port,password_vnc.decode().split("= ")[1][:-1]
            else :
                stop_container(container_id)
                return 0,0,0
    except:
        return 0,0,0
    
if __name__=="__main__":
    print(create_instance())
    