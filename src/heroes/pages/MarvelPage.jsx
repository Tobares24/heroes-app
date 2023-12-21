import { HeroesList } from "../components/HeroesList";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroesList publisher={"Marvel Comics"} />
    </>
  );
};
