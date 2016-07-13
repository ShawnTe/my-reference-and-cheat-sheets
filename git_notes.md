# Git Notes
(gitconfig file in root dir)

git add file.rb
git add .                     => all files in the directory, take care

git commit -m "Add message"
git commit                    => opens message file in editor. Edit/save/close message file to complete commit.
git commit --amend -m "msg"   => amends/replaces last commit

### History
git log                       => for a log of commits
git log --pretty=oneline      => abreviated version
git log --pretty=oneline --max-count=2
git log --pretty=oneline --since='5 minutes ago'
git log --pretty=oneline --until='5 minutes ago'
git log --pretty=oneline --author=Shawn
git log --pretty=oneline --all

hist = log --all --pretty=format:'%h %Cgreen(%cr)%Creset (%C(bold blue)<%an>%Creset) || %s' --since='7 days ago'
[List of placeholders](https://git-scm.com/docs/pretty-formats)

for ex:
- %h  abbreviated commit hash
- %cd committer date
- %cr committer date, relative
- %s  subject
- %an author name

####
git checkout <commit id #>    => switch to another branch if want to save changes made to this, or:
git checkout master           => to go back to HEAD
cat file.rb                   => shows contents of file (?!)

#### TAGS
git tag v1                    => current version of program is now v1 -- takes place of commit id, yes? now can:
git checkout v1     or
git checkout v1^    parent of v1. Then can rename that, for ex:
git tag v1-beta
git tag oops                  => can tag a commit that will get reset to prevent immed garbage collection
git tag -d oops               => deletes the tag, so commit can be garbage collected

git tag                       => to see tags available

#### Undo local change before staging.
git checkout hello.rb         => checkout the file to revert (before add)

#### Undo staged changes. (safe to use with public repos)
git reset HEAD hello.rb       => Note, the change is still there. Just need to co committed file (git co hello.rb)
git reset e8933fc             => to go back to a specific commit, also can use tag name
git reset --hard v1           => Reverts to v1, clears staging, reverts pwd (still accessible, see log --all)
                                   These will still be avail until garbage collection. BE CAREFUL with HARD
                                   reset if public.
