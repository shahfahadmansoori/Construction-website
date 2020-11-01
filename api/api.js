const api = () => {
  return fetch(
    "http://newsapi.org/v2/top-headlines?country=us&from=2020-09-18&sortBy=publishedAt&apiKey=abd7d5f237c84c04823e6b69ce0242f3"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default api;
