### Group git workflow
/Users/shawntuttle/devbootcamp/apps/empathy-bot:

(master) ::> git remote add upstream https://github.com/team-empathy/empathy-bot.git
(master) ::> git remote add ed https://github.com/edmechem/empathy-bot.git

(master) ::> git remote -v
ed	https://github.com/edmechem/empathy-bot.git (fetch)
ed	https://github.com/edmechem/empathy-bot.git (push)
origin	https://github.com/ShawnTe/empathy-bot.git (fetch)
origin	https://github.com/ShawnTe/empathy-bot.git (push)
upstream	https://github.com/team-empathy/empathy-bot.git (fetch)
upstream	https://github.com/team-empathy/empathy-bot.git (push)

(master) ::> git co -b ed-test
Switched to a new branch 'ed-test'     // new branch on my local

(ed-test) ::> git pull ed setup         // pulls his branch (This branch is referenced in the pull request that Ed opened in the organization. This enables me to test his code before merging the pull request.)

Then do npm install. May need to set up config file.
node app.js         // run file

### Update local with organization's updated repo:
 git pull --rebase upstream master (or development)

### Map to a branch
git branch -a
git co dev remotes/origin/development

### stash and pop
git stash
git pop


git diff

gitx

git commit -v         //(verbose, opens up message in text editor)

git cottle
