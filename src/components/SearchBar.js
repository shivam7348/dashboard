import React from 'react';

function SearchBar({ onSearch, employee }) {

 
  return (
   <div>
     <input
     type="text"
     placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
      className="mt-5 ml-3 rounded-lg"
/>


    <div className='flex justify-end p-5 '>
    <div className="flex items-center space-x-2">
   
    <img src={'https://images.pexels.com/photos/28169367/pexels-photo-28169367/free-photo-of-black-model-in-yellow-drapes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt="Profile" class="w-10 h-10 rounded-full bg-yellow-500 object-cover" />
    
   
    <span className="flex items-center text-gray-800 font-semibold">
        Fakhar Naveed
        <svg className="w-4 h-4 text-gray-600 ml-1" xmlns="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </span>
</div>
    </div>
      
   </div>
  );
}

export default SearchBar;
