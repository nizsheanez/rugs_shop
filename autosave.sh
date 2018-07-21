#!/bin/bash

git diff-index --quiet HEAD --
has_changes=$?

if [ ${has_changes} -eq 1 ]; then 
    git stash;  
    git pull;
    git stash pop;
    git commit -am "changed by filebrowser";
    git push;
else 
    git pull;
fi;


