import config from "./config";

const fetchBlogs = async (filters = "") => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  const timestamp = new Date().getTime();

  const request = await fetch(
    `${config.api}/api/blogs?populate=Thumbnail.data&select=slug${filters}&timestamp=${timestamp}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};

export default fetchBlogs;
