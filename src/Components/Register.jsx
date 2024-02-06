import React, { useState } from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Register() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const stateOptions = {
  Australia: [
      "New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Northern Territory", "Australian Capital Territory", // Add more states for Australia
    ],
    Argentina: [
      "Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Tucumán", "Entre Ríos", "Salta", "Chaco", "Corrientes", "Misiones", // Add more provinces for Argentina
    ],
    Brazil: [
      "São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Rio Grande do Sul", "Paraná", "Pernambuco", "Ceará", "Pará", "Santa Catarina", // Add more states for Brazil
    ],
    Canada: [
      "Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick", "Newfoundland and Labrador", "Prince Edward Island", // Add more states for Canada
    ],
    China: [
      "Beijing", "Shanghai", "Guangdong", "Shenzhen", "Tianjin", "Zhejiang", "Hubei", "Chongqing", "Jiangsu", "Sichuan", // Add more states for China
    ],
    Egypt: [
      "Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Ismailia", "Faiyum", // Add more governorates for Egypt
    ],
    France: [
      "Île-de-France", "Provence-Alpes-Côte d'Azur", "Occitanie", "Nouvelle-Aquitaine", "Auvergne-Rhône-Alpes", "Hauts-de-France", "Pays de la Loire", "Brittany", "Normandy", "Corsica", // Add more states for France
    ],
    Germany: [
      "Berlin", "Bavaria", "Hamburg", "Baden-Württemberg", "North Rhine-Westphalia", "Lower Saxony", "Hesse", "Saxony", "Rhineland-Palatinate", "Schleswig-Holstein", // Add more states for Germany
    ],
    India: [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Maharashra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Gujarat", "Rajasthan", // Add more states for India
    ],
    Japan: [
      "Tokyo", "Osaka", "Hokkaido", "Aichi", "Kanagawa", "Saitama", "Chiba", "Hyogo", "Fukuoka", "Shizuoka", // Add more states for Japan
    ],
    Mexico: [
      "Mexico City", "Jalisco", "Nuevo León", "Guanajuato", "Puebla", "Veracruz", "Baja California", "Michoacán", "Oaxaca", "Chihuahua", // Add more states for Mexico
    ],
    Russia: [
      "Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don", // Add more states for Russia
    ],
    South_Africa: [
      "Gauteng", "KwaZulu-Natal", "Western Cape", "Eastern Cape", "Limpopo", "Mpumalanga", "North West", "Free State", "Northern Cape", // Add more provinces for South Africa
    ],
    Saudi_Arabia: [
      "Riyadh", "Mecca", "Medina", "Eastern Province", "Asir", "Tabuk", "Ha'il", "Northern Borders", "Jizan", "Najran", // Add more regions for Saudi Arabia
    ],
    Spain: [
      "Madrid", "Catalonia", "Andalusia", "Valencia", "Galicia", "Castile and León", "Basque Country", "Castilla-La Mancha", "Canary Islands", "Murcia", // Add more autonomous communities for Spain
    ],
    Thailand: [
      "Bangkok", "Phuket", "Chiang Mai", "Pattaya", "Krabi", "Ayutthaya", "Hua Hin", "Koh Samui", "Pattaya", "Chiang Rai", // Add more provinces for Thailand
    ],
    USA: [
      "New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan", // Add more states for USA
    ],
   
    
   
  };

 const cityOptions = {
    "Andhra Pradesh": [
      "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kakinada", "Anantapur", "Vizianagaram", // Add more cities for Andhra Pradesh
    ],
    "Arunachal Pradesh": [
      "Itanagar", "Naharlagun", "Pasighat", "Roing", "Tezu", "Ziro", "Daporijo", "Along", "Namsai", "Bomdila", // Add more cities for Arunachal Pradesh
    ],
    "Assam": [
      "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Diphu", "North Lakhimpur", // Add more cities for Assam
    ],
    "Maharashra": [
      "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Amravati", "Malegaon", "Kolhapur", "Nanded", // Add more cities for Maharashtra
    ],
    "Karnataka": [
      "Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Davanagere", "Bellary", "Gulbarga", "Shimoga", "Tumkur", // Add more cities for Karnataka
    ],
    "Tamil Nadu": [
      "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Thoothukudi", "Thanjavur", // Add more cities for Tamil Nadu
    ],
    "Uttar Pradesh": [
      "Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", // Add more cities for Uttar Pradesh
    ],
    "West Bengal": [
      "Kolkata", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda", "Baharampur", "Kharagpur", "Habra", "Shantipur", // Add more cities for West Bengal
    ],
    "Gujarat": [
      "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Nadiad", "Anand", // Add more cities for Gujarat
    ],
    "Rajasthan": [
      "Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar", // Add more cities for Rajasthan
    ],
    "New York": [
      "New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", // Add more cities for New York
    ],
    "California": [
      "Los Angeles", "San Francisco", "San Diego", "San Jose", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", // Add more cities for California
    ],
    "Texas": [
      "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo", // Add more cities for Texas
    ],
    "Florida": [
      "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", // Add more cities for Florida
    ],
    "Illinois": [
      "Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero", // Add more cities for Illinois
    ],
    "Pennsylvania": [
      "Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York", // Add more cities for Pennsylvania
    ],
    "Ohio": [
      "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Youngstown", "Canton", "Lorain", // Add more cities for Ohio
    ],
    "Georgia": [
      "Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Sandy Springs", "Roswell", "Macon", "Johns Creek", "Albany", // Add more cities for Georgia
    ],
    "North Carolina": [
      "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord", // Add more cities for North Carolina
    ],
    "Michigan": [
      "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland", // Add more cities for Michigan
    ],
    "Mexico City": [
      "Cuauhtémoc", "Miguel Hidalgo", "Benito Juárez", "Coyoacán", "Álvaro Obregón", "Tlalpan", "Iztapalapa", "Gustavo A. Madero", "Xochimilco", "Azcapotzalco", // Add more cities for Mexico City
    ],
    "Bangkok": [
      "Siam", "Sukhumvit", "Silom", "Sathorn", "Pratunam", "Khao San", "Rattanakosin", "Chatuchak", "Thonburi", "China Town", // Add more districts for Bangkok
    ],
    "Phuket": [
      "Patong", "Karon", "Kata", "Phuket Town", "Bang Tao", "Kamala", "Rawai", "Surin", "Nai Harn", "Chalong", // Add more districts for Phuket
    ],
    "Chiang Mai": [
      "Old City", "Nimmanhaemin", "Wat Ket", "Hai Ya", "Chang Phueak", "Suthep", "Mae Hia", "Pa Daet", "Wat Phra Singh", "Wat Gate", // Add more districts for Chiang Mai
    ],
    "Pattaya": [
      "Central Pattaya", "South Pattaya", "Jomtien Beach", "Naklua Beach", "Wongamat Beach", "East Pattaya", "Pratumnak Hill", "Na Jomtien", "Bang Saray", "Huai Yai", // Add more districts for Pattaya
    ],
    "Krabi": [
      "Ao Nang", "Krabi Town", "Klong Muang", "Nopparat Thara", "Railay Beach", "Tonsai Beach", "Koh Phi Phi", "Koh Lanta", "Koh Yao Noi", "Koh Yao Yai", // Add more districts for Krabi
    ],
    "Ayutthaya": [
      "Ayutthaya Historical Park", "Bang Pa-In Royal Palace", "Wat Phra Si Sanphet", "Wat Chaiwatthanaram", "Wat Mahathat", "Wat Yai Chai Mongkol", "Wat Phanan Choeng", "Chao Phrom Market", "Ayothaya Floating Market", "Elephantstay", // Add more attractions for Ayutthaya
    ],
    "Hua Hin": [
      "Hua Hin Beach", "Hua Hin Night Market", "Cicada Market", "Hua Hin Railway Station", "Wat Huay Mongkol", "Khao Takiab", "Hua Hin Hills Vineyard", "Wat Khao Takiab", "Vana Nava Water Jungle", "Hin Lek Fai Hill", // Add more attractions for Hua Hin
    ],
    "Koh Samui": [
      "Chaweng Beach", "Lamai Beach", "Fisherman's Village", "Big Buddha Temple", "Wat Plai Laem", "Na Muang Waterfall", "Hin Ta and Hin Yai Rocks", "Secret Buddha Garden", "Ang Thong National Marine Park", "Samui Aquarium and Tiger Zoo", // Add more attractions for Koh Samui
    ],
    "Chiang Rai": [
      "Wat Rong Khun", "Doi Tung", "Golden Triangle", "Wat Phra Kaew", "Wat Phra Singh", "Wat Rong Suea Ten", "Clock Tower Chiang Rai", "Singha Park", "Wat Phra That Doi Chom Thong", "Mae Fah Luang Art and Culture Park", // Add more attractions for Chiang Rai
    ],
    "Beijing": [
      "Dongcheng District", "Xicheng District", "Chaoyang District", "Haidian District", "Fengtai District", "Shijingshan District", "Tongzhou District", "Shunyi District", "Changping District", "Daxing District", // Add more districts for Beijing
    ],
    "Shanghai": [
      "Huangpu District", "Jing'an District", "Xuhui District", "Changning District", "Putuo District", "Hongkou District", "Yangpu District", "Minhang District", "Baoshan District", "Jiading District", // Add more districts for Shanghai
    ],
    "Guangdong": [
      "Guangzhou", "Shenzhen", "Dongguan", "Foshan", "Zhongshan", "Zhuhai", "Jiangmen", "Huizhou", "Shantou", "Shaoguan", // Add more cities for Guangdong
    ],
    "Zhejiang": [
      "Hangzhou", "Ningbo", "Wenzhou", "Jiaxing", "Huzhou", "Shaoxing", "Jinhua", "Quzhou", "Zhoushan", "Taizhou", // Add more cities for Zhejiang
    ],
    "Hubei": [
      "Wuhan", "Huangshi", "Shiyan", "Jingzhou", "Yichang", "Xiangyang", "Ezhou", "Huanggang", "Xianning", "Suizhou", // Add more cities for Hubei
    ],
    "Chongqing": [
      "Yuzhong District", "Dadukou District", "Jiangbei District", "Shapingba District", "Jiulongpo District", "Nan'an District", "Beibei District", "Wansheng District", "Shuangqiao District", "Yubei District", // Add more districts for Chongqing
    ],
    "Jiangsu": [
      "Nanjing", "Suzhou", "Wuxi", "Changzhou", "Nantong", "Xuzhou", "Yangzhou", "Zhenjiang", "Taizhou", "Yancheng", // Add more cities for Jiangsu
    ],
    "Sichuan": [
      "Chengdu", "Mianyang", "Luzhou", "Deyang", "Yibin", "Zigong", "Neijiang", "Leshan", "Nanchong", "Meishan", // Add more cities for Sichuan
    ],
    
  };

  // Function to handle country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <NavBar />
      <section className="text-gray-600 body-font flex items-center justify-center h-screen">
        <div className="lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col items-center w-full">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="first-name" className="leading-7 text-sm text-gray-600">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="last-name" className="leading-7 text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country</label>
              <select
                id="country"
                name="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select Country</option>
                {Object.keys(stateOptions).map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            {/* State dropdown */}
            {selectedCountry && (
              <div className="relative mb-4">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                <select
                  id="state"
                  name="state"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="">Select State</option>
                  {stateOptions[selectedCountry].map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            )}
            {/* City dropdown */}
            {selectedState && (
              <div className="relative mb-4">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                <select
                  id="city"
                  name="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="">Select City</option>
                  {cityOptions[selectedState].map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
            </form>
            <p className="text-sm text-gray-600 mt-3">
              Already a member? 
              <button style={{ backgroundColor: '#6366F1', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Login
                </Link>
              </button>
            </p>
          </div>
          <div id="loginForm" className="hidden lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col items-center w-full">
          </div>
        </section>
        <Footer />
      </>
    );
  }
  
  export default Register;
  


