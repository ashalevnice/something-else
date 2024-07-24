import BarChart from '@/components/BarChart';
import { Progress } from '@/components/ui/progress';
import { sleep } from '@/utils/sleep';
import { useEffect, useState } from 'react';

export default function Traits() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    async function getData() {
      for (let i = 0; i < 10; i++) {
        const randomTimeToSleepInMs = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        await sleep(randomTimeToSleepInMs);
        setProgressPercentage((prev) => prev + 10);
      }

      setIsLoading(false);
    }

    if (shouldLoad) {
      getData();
    }
  }, [isLoading, shouldLoad]);

  return (
    <>
      <div className="pb-8">
        <p className="font-bold text-3xl">Behavioral Skills</p>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Leadership</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Loyalty</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Persistence</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <button className="btn btn-neutral" onClick={() => setShouldLoad(true)}>
          Generate Info
        </button>
      </div>
      {!isLoading && (
        <>
          <BarChart />
          <p className="text-sm">
            The candidate's lack of motivation, empathy, and teamwork, combined with disinterest in
            customer service and technology, make them unsuitable for a call center role requiring
            dedication and strong communication skills.
          </p>
        </>
      )}
      {shouldLoad && isLoading && <Progress value={progressPercentage} />}
    </>
  );
}
