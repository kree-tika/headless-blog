import config from "./config";

const fetchBlogs = async (filter = "") => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  const timestamp = new Date().getTime();

  const request = await fetch(
    `${config.api}/api/blogs?populate=Thumbnail.data&select=slug${filter}&timestamp=${timestamp}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};

export default fetchBlogs;
