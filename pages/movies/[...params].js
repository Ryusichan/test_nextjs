import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    // img와 title 을 url로 받아오는 방법, querry를 활용하여 읽어들임
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${router.query.img}`} />
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
