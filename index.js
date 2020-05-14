function Scooter ( year, color, model ) {
  this.year = year
  this.color = color
  this.model = model
}

const samson = new Scooter ( 2015, "red", "swoosh" )

function Driver (name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

const allison = new Driver ( "Allison", "16 years", "2 years" )

function PickupLocation (address, city) {
  this.address = address
  this.city = city
}

const poshHotel = new PickupLocation ( "123 Boardway", "New York City" )
