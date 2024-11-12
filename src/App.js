import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterToggle from './components/FilterToggle';
import EmployeeCard from './components/EmployeeCard';

const employees = [
  { id: 1,
    name: 'John Doe',
    role: 'Team Lead',
    email: 'johndoe@microsoft.com',
    img: 'https://images.pexels.com/photos/28039173/pexels-photo-28039173/free-photo-of-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    status: 'active'},
  { id: 2,
     name: 'Johnson Wood',
     role: 'Front End Developer',
     email: 'johnsonwood@microsoft.com',
     img: 'https://images.pexels.com/photos/29235567/pexels-photo-29235567/free-photo-of-man-standing-still-on-busy-staircase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
     status: 'active' },
  { id: 3,
     name: 'Alex Mode',
     role: 'Software Engineer',
     email: 'alexmode@microsoft.com',
     img: 'https://images.pexels.com/photos/28169367/pexels-photo-28169367/free-photo-of-black-model-in-yellow-drapes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
     status: 'inactive' },
  { id: 4,
     name: 'Fakhar Naveed',
     role: 'UI/UX Designer',
     email: 'fakhar@microsoft.com',
     img: 'https://images.pexels.com/photos/28918121/pexels-photo-28918121/free-photo-of-hiker-admiring-the-dolomites-in-cortina-d-ampezzo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
     status: 'active' },
     { id: 5,
      name: 'Alex Mode',
      role: 'Software Engineer',
      email: 'alexmode@microsoft.com',
      img: 'https://images.pexels.com/photos/29104775/pexels-photo-29104775/free-photo-of-fashionable-woman-in-pink-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      status: 'inactive' },
      { id: 6,
        name: 'Alex Mode',
        role: 'Software Engineer',
        email: 'alexmode@microsoft.com',
        img: 'https://images.pexels.com/photos/29232927/pexels-photo-29232927/free-photo-of-young-woman-dancing-joyfully-in-a-flower-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        status: 'inactive' },
     
  
];

function App() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter((employee) => {
    return (
      (filter === 'all' || employee.status === filter) &&
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-emerald-200">
      <SearchBar onSearch={setSearchTerm} />
      <FilterToggle filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
  {filteredEmployees.map((employee) => (
    <EmployeeCard key={employee.id} employee={employee} />
  ))}
</div>

    </div>
  );
}

export default App;
