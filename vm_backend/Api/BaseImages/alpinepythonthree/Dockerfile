FROM novaspirit/alpine_xfce4_novnc





USER root                                
ARG PYTHON_VERSION=3.9.9
RUN apk add     wget     gcc     make     zlib-dev     libffi-dev     openssl-dev     musl-dev

# download and extract python sources
RUN cd /opt     && wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tgz \                                              
    && tar xzf Python-${PYTHON_VERSION}.tgz

# build python and remove left-over sources
RUN cd /opt/Python-${PYTHON_VERSION} \ 
    && ./configure --prefix=/usr --enable-optimizations --with-ensurepip=install     && make install     && rm /opt/Python-${PYTHON_VERSION}.tgz /opt/Python-${PYTHON_VERSION} -rf   
USER alpine                             
