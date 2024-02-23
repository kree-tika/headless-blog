import fetchBlogs from "@/fetchBlog";
import config from "@/config";

export async function generateMetadata(props) {
  const blogs = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`);
  if (blogs.data.length === 0) return null;
  const blog = blogs.data[0];
  const Title = blog.attributes.Title;
  const Summary = blog.attributes.Summary;
  const Image = `${config.api}${blog.attributes.Thumbnail.data.attributes.url}`;
  const Content = blog.attributes.Content;

  return {
    metadataBase: new URL("https://localhost:3000"),
    title: Title,
    openGraph: {
      title: Title,
      description: Summary,
      images: Image,
    },
    content: Content,
  };
}

const BlogDetails = async (props) => {
  const metaData = await generateMetadata(props);
  if (!metaData) return null;

  const {
    title,
    openGraph: { images },
    content,
  } = metaData;

  return (
    <>
      <div className="h1">{title}</div>
      <div className="blog-container">
        <img src={images} alt="Thumbnail" />
        <p>{extractContent(content)}</p>
      </div>
    </>
  );
};

const extractContent = (contentArray) => {
  if (!contentArray || contentArray.length === 0) {
    return "No content available";
  }
  const paragraph = contentArray[0];
  const textNode = paragraph.children[0];
  return textNode.text || "No content available";
};

export default BlogDetails;
