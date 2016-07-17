# Bundle Exec Rake _Commands_
## be db: create / drop (the database) / migrate / rollback (last migration) / seed / version
## be generate: model / migrations / spec

### Flow
- gem install bundler (should be one time thing in workspace)
- bundle install  (if [issue with Ruby version](ruby-env.md))
- generate:model NAME=Student   (uppercase, singular)  (only have to do once i.e. if drop)
- generate:migration NAME=create_students   (only have to create once)
- be db:create
- be db:migrate        (ref [active record associations](active-record-associations.md))
- be db:seed


- be spec
- be console


be rake -T
