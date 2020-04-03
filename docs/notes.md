# TODO

upgrade java 11
https://github.com/jhipster/generator-jhipster/issues/8573

# Jhipsterbank

project name : jhipsterbank

# custom folder/file
- docs
- jdl
- workbenchModels.mwb
- jenkinsfile

# TODO
- [ ] secrets Kubernetes
- aks todo https://github.com/diop-malick/todo-app-java-on-azure/tree/master/deploy/aks
- [ ] ci/cd azure
- [-] ci-cd: GitHub Actions > only on master for publish with tag, on dev for publish with snackshop
- [ ] ci-cd: deploy in rancher 2
- [ ] ci/cd aws
- [ ] ci/cd gcp
- [ ] test reactive, jhispterbank
- [ ] clear bank account jdl sample
- [ ] github action
- [ ] JDL
	- [X] model-1.jdl
	- [X] model-2.jdl
	- [ ] https://github.com/jhipster/generator-jhipster/blob/master/test-integration/samples/jdl-default/app.jdl
	- [ ] https://github.com/jhipster/jdl-samples/blob/master/bug-tracker.jh
	- [ ] https://github.com/jhipster/jdl-samples/blob/master/blog.jh
	- [ ] https://github.com/jhipster/jdl-samples/blob/master/online-shop.jh

- [ ] ci-cd: analyse code with sonar cloud/ custom sonar, reexecute jhipster cicd generator


# How to Upgrade 

- JHipster
- k8s subgenerator

# how to

> cd C:\devlabs\jhipster\jhipsterbank

* clean dir, Remove all jhipster files/directories except for custom one

> rm -rf !("jdl/"|".git/"|"docs/") 


* generate application

> jhipster import-jdl jdl\app.jdl --force

* generate deployment

> jhipster import-jdl jdl\deployment.jdl


* generate kubernetes conf

navigate to the root directory of your project, and create a kubernetes directory. Then run

> mkdir kubernetes & cd kubernetes
> jhipster kubernetes

# TMP

automatic project update to jhipster 6.8.0

# local kube cluster

* set context to local cluster
https://kubernetes.io/fr/docs/reference/kubectl/cheatsheet/#contexte-et-configuration-de-kubectl

kubectl config get-contexts
kubectl config use-context docker-for-desktop
 kubectl get nodes