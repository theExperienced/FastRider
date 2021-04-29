import { useEffect } from 'react';
import { useAppDispatch, useAppState } from './store';
import { validateTime } from './validation';
import { getRides } from './api';

import RidePicker from './components/RidePicker';
import FeatureBox from './components/FeatureBox';
import ChosenRideBox from './components/ChosenRideBox';

const App = () => {
  const { chosenRide, isAccepting } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getRides()
      .then(({ data }) => {
        dispatch({ type: 'SET_RIDES', payload: data });
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch({ type: 'SET_IS_ACCEPTING', payload: validateTime() });
  }, []);

  return (
    <div className='grid justify-center content-start bg-custom font-body text-grayish pt-10 px-10 min-h-screen lg:px-96'>
      <h1 className='text-3xl text-center text-gray-100 mb-10'>
        The Jungle™ Fast Rider
      </h1>

      {chosenRide ? (
        <ChosenRideBox ride={chosenRide} />
      ) : (
        <>
          <div className='grid grid-cols-1 gap-5 mb-16 justify-center lg:grid-cols-3'>
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
          </div>
          {!isAccepting && (
            <p className='mb-5 text-red-400'>
              The system accepts requests between 11:00 - 19:00. You're welcome
              to browse the rides nevertheless.
            </p>
          )}
          <RidePicker />
        </>
      )}
    </div>
  );
};

export default App;
