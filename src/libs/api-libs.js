export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

// misal gap = 5 dan data = 200
// last data? ya 205
// MAX DATA mesti 200

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1); // ~~ = math.floor
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
