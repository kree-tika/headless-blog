import Card from "./card";
import config from "@/config";
import fetchBlogs from "@/fetchBlog";

const Blog = async () => {
  const blogs = await fetchBlogs();
  // console.log(blogs.data);

  return (
    <>
      <div className="h1">Blogs</div>
      <div className="container">
        {blogs.data.map((blog) => (
          <div key={blog.id}>
            <Card
              title={blog.attributes.Title}
              summary={blog.attributes.Summary}
              imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
              imgAlt="Thumbnail"
              href={`${blog.attributes.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
