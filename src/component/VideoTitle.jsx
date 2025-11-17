import { IconPlayerPlay, IconInfoCircle } from '@tabler/icons-react';


const VideoTitle = ({title, desc}) => {
 
  return (
    <div className='w-full aspect-video absolute pt-52 px-14 text-white bg-linear-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{desc}</p>
      <div className='flex'>
         <button className='bg-white text-black p-4 px-12 text-xl bg-opacity-150 rounded-lg flex gap-2 items-center cursor-pointer'><IconPlayerPlay/> Play</button>
         <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg flex gap-2 items-center cursor-pointer'><IconInfoCircle/>
         More Info
         </button>
      </div>
    </div>
  );
};

export default VideoTitle;
