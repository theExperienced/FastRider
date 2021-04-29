import React from 'react';
import moment from 'moment';

import { ReactComponent as CheckIcon } from '../assets/ico-04.svg';

const ChosenRideBox = ({ ride }) => {
  const {
    ride: {
      id,
      name,
      return_time,
      remaining_tickets,
      zone: { color, name: zoneName },
    },
    access_code,
  } = ride;

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      <CheckIcon className='text-center' />
      <p className='px-5 text-center lg:px-32'>
        Thank you for using The Jungle™ FastRider ticket system - your access
        code is now ready!
      </p>
      <div
        className={`flex flex-wrap justify-self-center justify-between p-3 bg-box-default self-start border-t-4 border-${color}`}
      >
        <p className='text-gray-100'>{ride.ride.name}</p>
        <p>{ride.ride.zone.name}</p>
        <span className='flex flex-col flex-daniel items-center'>
          <span>Return At</span>
          <span className='text-gray-100'>{`${moment(
            ride.ride.return_time
          ).hours()}:${moment(ride.ride.return_time).minutes()}`}</span>
        </span>
        <span className='flex flex-col flex-daniel items-center'>
          <span>User Access Code</span>
          <span className='text-gray-100'>{ride.access_code}</span>
        </span>
      </div>
    </div>
  );
};

export default ChosenRideBox;
