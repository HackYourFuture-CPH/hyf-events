import useSwr from "swr";

export const baseUrl = `https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORG_ID}/events`;

export const useFetch = (path: string, name?: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSwr(url);

  return { data, error };
};
