const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
  return (
    <div className="max-w-screen-md mt-20 mx-auto text-center">
      <h1 className="text-2xl font-bold">Choose an Album</h1>
      <div className="mt-10">
        <select>
          {OPTIONS.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <button className="ml-6">Enter</button>
      </div>
    </div>
  );
};

export default Home;
