
# Kubernetes Dashboard

- *** https://collabnix.com/kubernetes-dashboard-on-docker-desktop-for-windows-2-0-0-3-in-2-minutes/
- ** https://www.hanselman.com/blog/HowToSetUpKubernetesOnWindows10WithDockerForWindowsAndRunASPNETCore.aspx

By default, you won't get the Kubernetes Dashboard - of which I'm a fan - so you may want to install that.
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml

to add charts and graphs to Kubernetes Dashboard

kubectl create -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/influxdb.yaml
kubectl create -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/heapster.yaml
kubectl create -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/grafana.yaml

I can access the dashboard by default by running "kubectl proxy" then visiting this http://localhost:8001/ui and I'll get redirected to the dashboard:
http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/overview?namespace=all

# link

https://developer.okta.com/blog/2017/06/20/develop-microservices-with-jhipster

# cmdd

to see the status of each pod.
> kubectl get po -o wide --watch

To remove all deployed containers in default namespace, run the following command:
> kubectl delete deployment --all --namespace=default
