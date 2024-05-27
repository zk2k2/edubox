import subprocess
import shutil
import os

def clone_bases(base_path):
        container_bases=open(base_path+"/BaseImages/listof_contaienrs.txt",'r').read().split("\n")
        res=[]
        for i in container_bases:
            print(i)
            P = subprocess.Popen(i, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            result, stderr = P.communicate()
            res.append(i.split(" ")[-1].split("/")[1])
        return res

if __name__=="__main__":
    clone_bases("")