import { useCookies } from 'react-cookie';
import { getTickets } from '../api';
import { useForm } from 'react-hook-form';
import { useTopInView } from '../hooks/useTopInView';
import { useAppDispatch, useAppState } from '../store';
import { registerUser } from '../utils';
import { validatePIN } from '../validation';

import RideOption from './RideOption';

const RidePicker = ({ setRide }) => {
  const dispatch = useAppDispatch();
  const { rides, isAccepting } = useAppState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const wantedRide = watch('ride');
  const { isTopInView, ref } = useTopInView();
  const [cookies, setCookie] = useCookies();

  const onSubmit = (values) => {
    if (!cookies.user) {
      getTickets(values)
        .then((res) => {
          const { data } = res;

          registerUser(
            cookies,
            setCookie,
            data.access_code,
            data.return_time,
            values.pin
          );

          // const momentTime = moment(data.return_time);
          // data.return_time = `${momentTime.hours()}:${momentTime.minutes()}`;
          dispatch({ type: 'SET_CHOSEN_RIDE', payload: data });
        })
        .catch((err) => {
          console.log(err);
        });
    } else alert('One request per period');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-start'
    >
      <fieldset readOnly={!isAccepting}>
        <div className='flex h-10 mb-5'>
          <input
            {...register('pin', { validate: (value) => validatePIN(value) })}
            className='flex-grow px-5 outline-none'
            defaultValue={cookies.pin || 'Your PIN number'}
          />
          {errors.pin && <span>Malformed user PIN</span>}
          <input
            type='submit'
            className={`fixed left-0 bottom-0 transition ${
              isTopInView ? '' : 'invisible'
            } w-full cursor-pointer bg-send px-10 py-3 z-10 uppercase text-gray-100 lg:px-10 lg:visible lg:static lg:w-auto`}
          />
        </div>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-4' ref={ref}>
          {rides &&
            rides.map((ride) => (
              <RideOption
                ride={ride}
                wantedRide={wantedRide}
                register={register}
                key={ride.id}
              />
            ))}
        </div>
      </fieldset>
    </form>
  );
};

export default RidePicker;
