import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    // img와 title 을 url로 받아오는 방법, querry를 활용하여 읽어들임
    <div>
      <Seo title={title} />
      <img src={`https://image.tmdb.org/t/p/w500${router.query.img}`} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
