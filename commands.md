cd /Users/nour/Desktop/nour/kth/period4/devops/demo2

open Docker (Application)

- starting minikube:
minikube start --driver=virtualbox

- stop minikube:
minikube stop

- to clean up:
minikube delete


- To get the External Ip address as if you are on the cloud
minikube service node-service-example

- To build inside
docker build -t j1:latest -f deploy/Dockerfile2 .


- To push to docker hub
docker login
docker tag j1:latest nouralhuda95/j1:latest
docker push nouralhuda95/j1:latest

- To run ansible playbook
ansible-playbook playbook.yml --extra-vars "image_id=nouralhuda95/j1"


- to run jenkis
java -jar jenkins.war


- to run ngrok:
./ngrok http 8080















------------------------
