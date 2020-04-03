#!/bin/bash
# Files are ordered in proper order with needed wait for the dependent custom resource definitions to get initialized.
# Usage: bash helm-apply.sh
helmVersion=$(helm version --client | grep -E "v3\\.[0-9]{1,3}\\.[0-9]{1,3}" | wc -l)
if [ -d "csvc" ]; then
helm delete --purge csvc 2>/dev/null
helm dep up ./csvc
  if [ $helmVersion -eq 1 ]; then
helm install csvc ./csvc --namespace default
  else
helm install --name csvc ./csvc --namespace default
  fi
fi
helm delete --purge jhipsterbank 2>/dev/null
helm dep up ./
if [ $helmVersion -eq 1 ]; then
helm install jhipsterbank  ./ --namespace default
else
helm install --name jhipsterbank  ./jhipsterbank --namespace default
fi


