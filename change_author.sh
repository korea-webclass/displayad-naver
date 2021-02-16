git filter-branch --env-filter ' 
WRONG_EMAIL="whwns940@gmail.com" 
NEW_NAME="webclass" 
NEW_EMAIL="korea.webclass@gmail.com" 

export GIT_COMMITTER_NAME="$NEW_NAME" 
export GIT_COMMITTER_EMAIL="$NEW_EMAIL" 
export GIT_AUTHOR_NAME="$NEW_NAME" 
export GIT_AUTHOR_EMAIL="$NEW_EMAIL" 
'--tag-name-filter cat -- --branches --tags