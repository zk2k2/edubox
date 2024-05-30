import subprocess
from scripts.utils import get_random_port,save_ports_id,read_ports_id,get_random_password
from scripts.stop_container import stop_container

class Run_containers():
    def    __init__(self):
        self.paswword=self.update_password()
        self.port_id=read_ports_id()
        self.start_vm={"ubuntu":"docker run -itd -p {}:6080 -e PASSWORD={} {}","alpine":"docker run  -itd  -p {}:6080 -e AUTOCONNECT=true -e VNC_PASSWORD={} -e VNC_SERVER=172.17.0.1:5900 -e VIEW_ONLY=false {}"}
        self.used_ports=self.update_port_id()
        print(self.used_ports)
    def update_port_id(self):
        return read_ports_id()
    def write_port_id(self,used_port):
        save_ports_id(used_port)  
    def update_password(self):
         return get_random_password()
    def Run_container(self,container_name,base_image):
        command=self.start_vm[base_image]
        password=get_random_password()

        port=get_random_port(self.used_ports)
        command=command.format(port,password,container_name*2)
        try:
            P = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            container_id, stderr = P.communicate()

            print(stderr)
            print(P.returncode)
            container_id=container_id[:-1].decode()
            if P.returncode ==0:
                    self.used_ports[container_id]=port
                    save_ports_id(self.used_ports)
                    return container_id,port,password
        except:
            return 0,0,0      
if __name__=="__main__":
    print("")
    