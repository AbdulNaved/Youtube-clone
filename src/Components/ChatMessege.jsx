import React from 'react';
import Avatar from 'react-avatar';

function ChatMessage({ item }) {
  return (
    <div className='flex items-start space-x-2 py-2'>
      <Avatar
        src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="cursor-pointer"
        size={25}
        round={true}
      />
      <div>
        <h1 className='font-bold text-sm'>{item.name}</h1>
        <p className='text-sm'>{item.message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;



