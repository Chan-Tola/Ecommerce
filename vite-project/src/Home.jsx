const Home = ({category, movies }) => {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">{category}</h2>
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="w-64 border rounded shadow">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-40 object-cover rounded-t"
                />
                <div className="p-2">
                  <h3 className="font-semibold text-lg">{movie.title}</h3>
                  <p className="text-sm text-gray-500">{movie.ep} episodes</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="w-64 border rounded shadow">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-2">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.ep} episodes</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Home;
