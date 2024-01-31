import fetchBlogs from "@/fetchBlog";
import config from "@/config";

const BlogDetails = async (props) => {
  const blogs = await fetchBlogs(`&filter[slug][$eq]=${props.params.slug}`);
  // console.log(`${props.params.slug}`);
  console.log(blogs.data);

  if (blogs.data.length === 0) return null;
  const blog = blogs.data[0];

  return (
    <>
      <div className="h1">{blog.attributes.Title}</div>
      <div className="blog-container">
        <img
          src={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
          alt="Thumbnail"
        />
        <p>{extractContent(blog.attributes.Content)}</p>
      </div>
    </>
  );
};

const extractContent = (contentArray) => {
  if (!contentArray || contentArray.length === 0) {
    return "No content available";
  }

  // Assuming the first item in the "Content" array is a paragraph
  const paragraph = contentArray[0];

  // Assuming the paragraph has "children" property containing text
  const textNode = paragraph.children[0];

  // Assuming the textNode has a "text" property
  return textNode.text || "No content available";
};

export default BlogDetails;
