import shutil
import os
import subprocess
class Create_Special_VM():
    def __init__(self,basepath):
        self.base_path=basepath
        self.dockerfile_path=""
        self.name=""
        self.command={"ubuntu":{"python2.7":"RUN apt install python2.7 python-pip","python3":"RUN apt install python3"},
                      "alpine":{"python3":"""
ARG PYTHON_VERSION=3.9.9
RUN apk add \
    wget \
    gcc \
    make \
    zlib-dev \
    libffi-dev \
    openssl-dev \
    musl-dev

# download and extract python sources
RUN cd /opt \
    && wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tgz \                                              
    && tar xzf Python-${PYTHON_VERSION}.tgz

# build python and remove left-over sources
RUN cd /opt/Python-${PYTHON_VERSION} \ 
    && ./configure --prefix=/usr --enable-optimizations --with-ensurepip=install \
    && make install \
    && rm /opt/Python-${PYTHON_VERSION}.tgz /opt/Python-${PYTHON_VERSION} -rf                                
"""}}
    def create_copy(self,path,newname):
        if not os.path.exists(self.base_path+path):
            print(f"Spirce folder {path},doesnt exitst")
            return False
        try:
            shutil.copytree(self.base_path+path,self.base_path+newname)
            return True
        except:
            print("failed to copy")
            return False
    def stringfylanguages(self,languages):
        mapping = {'0': 'zero','1': 'one','2': 'two','3': 'three','4': 'four','5': 'five','6': 'six','7': 'seven','8': 'eight','9': 'nine','.': 'point'}
        transformed_str = ''.join(mapping.get(char, char) for char in languages)
        return transformed_str

    def create_specialized_name(self,base_image,languages):
        languages.sort()
        new_name="".join([base_image]+[self.stringfylanguages(i) for i in languages])
        self.name=new_name
        return new_name
    def make_docker_file_path(self,name):
        self.dockerfile_path=self.base_path+name+"/Dockerfile"

    def add_command(self,OS_name,special_command):
        new_name=self.create_specialized_name(OS_name,special_command)
        self.make_docker_file_path(new_name)
        if not os.path.exists(self.dockerfile_path):
            self.create_copy(OS_name,new_name)
            dockerfile_content=open(self.dockerfile_path,"r").read().split("\n")
            for i in special_command:
                dockerfile_content.append(self.command[OS_name][i])
            docker_file_full_content="\n".join(dockerfile_content)
            open(self.dockerfile_path,"w").write(docker_file_full_content)
    def build_specifi_os(self):
        print(self.base_path+self.name)
        P=subprocess.Popen(f"docker build -t {self.name*2} {self.base_path+self.name+'/'}",shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out,stderr=P.communicate()

        print("building done")
        return self.name
    def prep_and_build(self,base_os,commands):
        self.add_command(base_os,commands)
        return self.build_specifi_os()


if __name__=="__main__":
    print("owch")
