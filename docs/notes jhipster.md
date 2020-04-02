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

- [ ] ci/cd azure
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

# TMP

automatic project update to jhipster 6.8.0