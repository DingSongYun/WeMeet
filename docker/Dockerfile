FROM centos

RUN groupadd gplus && \
    useradd -g gplus gplus && \
    su - gplus

RUN yum install -y sudo && \
    yum install -y net-tools.x86_64 && \
    yum install -y which && \
    yum install -y openssl openssh-server && \
    yum install -y git && \
    yum install -y epel-release && \
    yum install -y python-pip

RUN git --version && \
    python --version && \
    pip --version

RUN mkdir /var/run/sshd
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

RUN pip install Flask
