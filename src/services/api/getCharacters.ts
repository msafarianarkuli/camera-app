import Http from "../HttpConfig";

const getCharacters = async ({ pageParam = 0 }: any) => {
  const { data } = await Http.get(`/character?page=${pageParam}`);
  return { ...data, prevOffset: pageParam };
};

export default getCharacters;
