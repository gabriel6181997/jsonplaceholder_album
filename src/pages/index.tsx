import { useCallback, useState } from "react";
import { useRouter } from 'next/router'

const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
  const [selectOption, setSelectOption] = useState(1);
  const router = useRouter();

  const handleSelectOption = useCallback((e) => {
    setSelectOption(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    router.push({
      pathname: '/[albumId]',
      query: { albumId: selectOption },
    })
  }, [selectOption, router]);

  return (
    <div className="max-w-screen-md mt-20 mx-auto text-center">
      <h1 className="text-2xl font-bold">Choose an Album</h1>
      <div className="mt-10">
        <select
          value={selectOption}
          className="pr-5 pl-2 border-blue-300 border-2"
          onChange={handleSelectOption}
        >
          {OPTIONS.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <button
          className="ml-6 px-3 py-1 border-blue-300 border-2 rounded-full"
          onClick={handleClick}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Home;
