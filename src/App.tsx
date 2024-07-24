import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { sleep } from './utils/sleep';
import Avatar from './components/Avatar';
import Traits from './components/Traits';
import Conversation from './components/Conversation';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(0);

  useEffect(() => {
    async function getData() {
      await sleep(2000);
      setIsLoading(false);
    }

    getData();
  }, []);

  const loader = (
    <div className="flex items-center justify-center h-screen w-screen">
      <PacmanLoader size={60} color="#3369be" loading={isLoading} />
    </div>
  );

  return (
    <>
      <div className="flex justify-center">
        {isLoading && loader}
        {!isLoading && (
          <>
            <div className="flex gap-20 pt-4">
              <Avatar
                onClick={() => setSelectedAvatar(0)}
                img="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                isSelected={selectedAvatar === 0}
                name="Sarah"
              />
              <Avatar
                onClick={() => setSelectedAvatar(1)}
                img="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                isSelected={selectedAvatar === 1}
                name="Moti"
              />
              <Avatar
                onClick={() => setSelectedAvatar(2)}
                img="https://i.pravatar.cc/150?u=a04258114e29026302d"
                isSelected={selectedAvatar === 2}
                name="Itzik"
              />
            </div>
          </>
        )}
      </div>
      {!isLoading && (
        <div className="w-[90%] flex p-4 text-center my-0 mx-auto overflow-y-hidden">
          <div className="w-[65%]">
            <Conversation />
          </div>
          <div className="divider lg:divider-horizontal" />
          <div className="w-[35%]">
            <Traits />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
