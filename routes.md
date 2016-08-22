

post '/horses' do

  horse = Horse.new

  if horse.save
  else
    status 422 
  end

end