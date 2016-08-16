group :test, :development do
  gem 'factory_girl'
  gem 'faker', github: 'stympy/faker'      //in case using things like Hipster
end

### in seed file:
require 'faker'

### Examples
Faker::Hipster.sentence(word_count = 4)
user_id: 1 + rand(6)          // for six sided die

times = [5, 15, 30, 60]
times.sample
