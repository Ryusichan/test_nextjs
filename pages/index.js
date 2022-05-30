import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title, img) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
          img,
        },
      },
      //as 를 이용하여 masks url for the browser
      `/movies/${id}`
    );
  };
  return (
    <div className="container">
      <Seo title="home" />
      {results?.map((movie) => (
        <div
          onClick={() =>
            onClick(movie.id, movie.original_title, movie.poster_path)
          }
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=10923b261ba94d897ac6b81148314a3f`
    )
  ).json();
  return {
    props: {
      results,
    },
  };
}
