has_changes = git diff-index --quiet HEAD --
auto-save:
	has_changes || git stash
	git pull 
	has_changes || git stash pop
	has_changes || git commit -am "changed by filebrowser"
	has_changes || git push 

	