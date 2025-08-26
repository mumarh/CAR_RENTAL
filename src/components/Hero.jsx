import React, { useEffect } from 'react'
import { MapPin } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Search } from 'lucide-react';

//Scroll Reveal
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal('.hero-reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'left',
      reset: false, 
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".head-reveal", {
      scale: 0.85,
      distance: "0px",
      duration: 1500,
      easing: "ease-in-out",
      reset: false
    })
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal-y", {
      origin: "bottom",
      distance: "100px",
      duration: 1500,
      interval: 200,
      easing: "ease-in-out",
      reset: false
    })
  }, []);

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
  "San Francisco", "Columbus", "Fort Worth", "Charlotte", "Indianapolis", "Seattle",
  "Denver", "Washington", "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City",
  "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore", "Milwaukee", "Albuquerque",
  "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Omaha", "Colorado Springs",
  "Miami", "Raleigh", "Long Beach", "Virginia Beach", "Oakland", "Minneapolis", "Tulsa",
  "Arlington", "New Orleans", "Cleveland", "Tampa", "Wichita", "Bakersfield", "Aurora", "Honolulu",
  "Anaheim", "Santa Ana", "Riverside", "Corpus Christi", "Lexington", "Stockton", "Henderson",
  "St. Paul", "St. Louis", "Cincinnati", "Pittsburgh", "Anchorage", "Plano", "Orlando", "Irvine",
  "Durham", "Chula Vista", "Fort Wayne", "Jersey City", "Toledo", "Madison", "Chandler", "Laredo",
  "Buffalo", "Scottsdale", "Reno", "Gilbert", "Glendale", "North Las Vegas", "Winston-Salem",
  "Norfolk", "Fremont", "Garland", "Irving", "Hialeah", "Richmond", "Boise", "Spokane",
  "Baton Rouge", "Tacoma", "San Bernardino", "Modesto", "Fontana", "Santa Clarita", "Oxnard",
  "Birmingham", "Rochester", "Port St. Lucie", "Grand Rapids", "Salt Lake City", "Huntsville",
  "Frisco", "Yonkers", "Amarillo", "Huntington Beach", "McKinney", "Montgomery", "Augusta",
  "Akron", "Little Rock", "Tempe", "Overland Park", "Grand Prairie", "Knoxville", "Sioux Falls",
  "Mobile", "Shreveport", "Worcester", "Ontario", "Vancouver", "Fort Lauderdale", "Chattanooga",
  "Cape Coral", "Oceanside", "Jackson", "Garden Grove", "Rancho Cucamonga", "Santa Rosa",
  "Salem", "Pembroke Pines", "Eugene", "Peoria", "Corona", "Cary", "Springfield",
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar",
  "Quetta", "Sialkot", "Gujranwala", "Hyderabad", "Sukkur", "Bahawalpur", "Abbottabad",
  "Mardan", "Mingora (Swat)", "Dera Ghazi Khan", "Sahiwal", "Okara", "Vehari", "Kasur",
  "Sheikhupura", "Chiniot", "Jhang", "Rahim Yar Khan", "Gujrat", "Mirpur Khas",
  "Khuzdar", "Gwadar", "Mansehra", "Nawabshah", "Larkana", "Kohat", "Attock",
  "Muzaffarabad", "Gilgit", "Skardu", "Hunza",
  "London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Glasgow", "Edinburgh",
  "Paris", "Marseille", "Lyon", "Nice", "Berlin", "Hamburg", "Munich", "Frankfurt",
  "Madrid", "Barcelona", "Valencia", "Seville", "Rome", "Milan", "Naples", "Turin",
  "Lisbon", "Porto", "Vienna", "Zurich", "Geneva", "Brussels", "Amsterdam",
  "Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Jeddah", "Mecca", "Medina",
  "Doha", "Kuwait City", "Muscat", "Manama", "Amman", "Beirut",
  "Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu", "Tokyo", "Osaka", "Kyoto",
  "Seoul", "Busan", "Incheon", "Bangkok", "Chiang Mai", "Kuala Lumpur", "Singapore",
  "Jakarta", "Bali", "Hanoi", "Ho Chi Minh City", "New Delhi", "Mumbai", "Bangalore",
  "Chennai", "Kolkata", "Hyderabad", "Ahmedabad",
  "Cairo", "Alexandria", "Johannesburg", "Cape Town", "Durban", "Nairobi", "Mombasa",
  "Lagos", "Abuja", "Accra", "Casablanca", "Marrakech", "Tunis", "Algiers",
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa",
  "Mexico City", "Cancún", "Guadalajara", "São Paulo", "Rio de Janeiro",
  "Buenos Aires", "Santiago", "Lima"
];

  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 hero-reveal">
        Find Your Perfect <span className="text-yellow-400">Rental Car</span>
      </h1>
      <p className="text-lg sm:text-xl mb-12 text-gray-200 hero-reveal">
        Discover amazing deals on quality vehicles. Book now and drive away with confidence.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black hero-reveal">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <MapPin className='w-5 h-5' /> <span>Pickup Location</span>
          </label>
          <select className="w-full p-2 border border-gray-300 rounded cursor-pointer">
            <option>Select city</option>
            {cities.map((city, index) => (
              <option key={index}>{city}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className='w-5 h-5' /> <span>Pickup Date</span>
          </label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded cursor-pointer" />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Clock className='w-5 h-5' /> <span>Pickup Time</span>
          </label>
          <input type='time' className="w-full p-2 border border-gray-300 rounded cursor-pointer" />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className='w-5 h-5' /> <span>Return Date</span>
          </label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <button className="flex items-center justify-center gap-2 w-full cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">
            <Search className='w-5 h-5' /> <span>Search Cars</span>
          </button>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-white hero-reveal">
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">500+</h2>
          <p className="sm:text-lg text-gray-200">Premium Cars</p>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">50+</h2>
          <p className="sm:text-lg text-gray-200">Locations</p>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">24/7</h2>
          <p className="sm:text-lg text-gray-200">Support</p>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">99%</h2>
          <p className="sm:text-lg text-gray-200">Satisfaction</p>
        </div>
      </div>
    </section>
  )
}

export default Hero;
