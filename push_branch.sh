#!/bin/sh

BRANCH=${1-travis}

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_files() {
  git checkout -b ${BRANCH}
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add deploy-repo https://${GH_TOKEN}@github.com/leoyuholo/gcp-travis-deploy.git > /dev/null 2>&1
  git push --quiet --set-upstream deploy-repo ${BRANCH}
}

setup_git
commit_files
upload_files
