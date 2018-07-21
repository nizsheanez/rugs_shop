auto-save:
	git stash
	git pull 
	git stash pop
	git commit -am "changed by filebrowser"
	git push 

	