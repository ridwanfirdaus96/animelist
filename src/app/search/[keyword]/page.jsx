import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  // );
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  return (
    <div>
      <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
      <AnimeList api={searchAnime} />
    </div>
  );
};

export default Page;
