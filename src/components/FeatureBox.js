import { ReactComponent as FirstIcon } from '../assets/ico-01.svg';

const FeatureBox = () => {
  return (
    <div className='flex flex-col items-center  '>
      <FirstIcon className='rounded-full bg-gray-700 transform scale-50' />
      <p className='text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel erat
        enim. Curabitur auctor nisi massa.
      </p>
    </div>
  );
};

export default FeatureBox;
