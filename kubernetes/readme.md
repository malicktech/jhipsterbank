You will need to push your image to a registry. If you have not done so, use the following commands to tag and push the images:

> docker image tag jhipsterbank citizendiop/jhipsterbank
> docker push citizendiop/jhipsterbank

INFO! Alternatively, you can use Jib to build and push image directly to a remote registry:

> ./mvnw -ntp -Pprod verify jib:build -Djib.to.image=citizendiop/jhipsterbank 

in C:\devlabs\jhipster\jhipsterbank

You can deploy all your apps by running the following kubectl command:
> bash kubectl-apply.sh -f

[OR]

If you want to use kustomize configuration, then run the following command:
> bash kubectl-apply.sh -k

Use these commands to find your application's IP addresses:
  kubectl get svc jhipsterbank

  ===
  Run the following commands to tag your Docker images. The Kubernetes sub-generator says to run docker push as well, but you don’t need that for a Minikube/localcluster deployment.

> docker image tag jhipsterbank citizendiop/jhipsterbank

Run the following commands in the project directory to deploy to local cluster/minikube

> cd jhipsterbank
>  kubectl apply -f kubernetes\

Run kubernetes dashboard to see the deployed containers.

