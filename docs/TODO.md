# 02/04/2020

- [x] Upgrade JHipster to v6.8.0 (https://www.jhipster.tech/2020/03/08/jhipster-release-6.8.0.html)
- [x] regenerate project with jdl file
- [x] k8s sub generator
- [ ] k8s helm sub
	issue when deploy with hel: `pod has unbound immediate PersistentVolumeClaims`

- [x] ci-cd: GitHub Actions > Build and publish docker image with  https://dev.to/azure/the-easy-way-to-deploy-a-spring-boot-application-to-production-on-azure-2joi

	go to `github repository > settings > secret`
	then add secrets : `DOCKER_USERNAME`  and `DOCKER_PASSWORD`