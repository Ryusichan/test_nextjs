import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <style jsx global>
        {`
          .active {
            color: red;
          }
        `}
      </style>
    </>
  );
}
