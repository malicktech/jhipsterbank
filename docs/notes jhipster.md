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
- Upgrade JHipster to v6.8.0 (https://www.jhipster.tech/2020/03/08/jhipster-release-6.8.0.html)
- regenerate project with jdl file
	- [ ] https://github.com/jhipster/generator-jhipster/blob/master/test-integration/samples/jdl-default/app.jdl
	- [ ] https://github.com/jhipster/jdl-samples/blob/master/bug-tracker.jh
	- [ ] https://github.com/jhipster/jdl-samples/blob/master/blog.jh
	- [ ] https://github.com/jhipster/jdl-samples/blob/master/online-shop.jh

- k8s sub generator
- k8s helm sub
- ci/cd azure
- ci/cd aws
- ci/cd gcp
- test reactive, jhispterbank
- clear bank account jdl sample

- [ ] JDL
	- [X] model-1.jdl
	- [X] model-2.jdl

# How to Upgrade 

- JHipster
- k8s subgenerator

# how to

> cd C:\devlabs\jhipster\jhipsterbank

* clean dir

> rm -rf !("jdl/"|".git/"|"docs/") 


* generate application

> jhipster import-jdl app.jdl --force