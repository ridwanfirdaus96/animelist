import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  //versi sederhana (reusabel call api)
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4); // sebanyak 4 data

  // recommendedAnime = { data: recommendedAnime.slice(0, 4) };

  //   Akal-akalan gue ni bang buat nge-randomize:
  // const generateNumberMin = () => {
  //   let firstNum = Math.floor(Math.random() * recommendedAnime.length - 4); // menghindari data 197 - 200.
  //   let secondNum = firstNum + 4;
  //   const ArrRandomNumb = [];
  //   ArrRandomNumb.push(firstNum);
  //   ArrRandomNumb.push(secondNum); // memunculkan range 4 nomor. contoh [0, 4] atau [5, 9], [196, 200]
  //   return ArrRandomNumb;
  // };
  // const randomArr = generateNumberMin();
  // recommendedAnime = {
  //   data: recommendedAnime.slice(randomArr[0], randomArr[1]),
  // };
  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* anime rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
