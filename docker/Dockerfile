FROM centos:centos6

RUN groupadd gplus && \
    useradd -g gplus gplus && \
    echo "gplus    ALL=(ALL)   ALL" >> /etc/sudoers

RUN yum -y install initscripts && yum clean all

RUN yum install -y sudo && \
    yum install -y net-tools.x86_64 && \
    yum install -y which && \
    yum install -y openssl openssh-server && \
    yum install -y epel-release && \
    yum install -y git && \
    yum install -y python-pip

RUN yum install -y nodejs npm --enablerepo=epel && \
    npm install -g yarn react-native-cli

RUN git --version && \
    python --version && \
    pip --version

RUN pip install Flask

#RUN mkdir /var/run/sshd
#CMD ["/usr/sbin/sshd", "-D"]

RUN service sshd start

RUN mkdir /home/gplus/.ssh && \
    chmod 700 /home/gplus/.ssh && \
    echo ~/.ssh/id_rsa.pub > /home/gplus/.ssh/authorized_keys && \
    chmod 600 /home/gplus/.ssh/authorized_keys
