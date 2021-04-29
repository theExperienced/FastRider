import moment from 'moment';

import { ReactComponent as TicketIcon } from '../assets/ico-01.svg';
import { ReactComponent as ClockIcon } from '../assets/ico-03.svg';

const RideOption = ({ ride, wantedRide, register }) => {
  const {
    id,
    name,
    return_time,
    remaining_tickets,
    zone: { color, name: zoneName },
  } = ride;

  return (
    <div className='relative squared'>
      <label
        className={`absolute w-full h-full inset-0 flex flex-wrap justify-between cursor-pointer border-t-4 border-${color}  p-2 transition ${
          remaining_tickets
            ? wantedRide == id
              ? `bg-${color}`
              : 'bg-box-default'
            : 'bg-box-disabled'
        }`}
        htmlFor={id}
      >
        <input
          type='radio'
          {...register('ride')}
          className='hidden'
          id={id}
          value={id}
          disabled={!remaining_tickets}
        />
        <p className='flex-daniel text-right '>{zoneName}</p>
        <p className='flex-daniel text-gray-100 text-center py-3 text-2xl'>
          {name}
        </p>
        {remaining_tickets !== 0 && (
          <span className='flex justify-start self-end'>
            <ClockIcon className='h-5 w-5' />

            <span>{`${moment(return_time).hours()}:
            ${moment(return_time).minutes()}`}</span>
          </span>
        )}
        <span className='flex justify-start self-end ml-auto'>
          <TicketIcon className='h-5 w-5' />
          <span>{remaining_tickets}</span>
        </span>
      </label>
    </div>
  );
};

export default RideOption;
