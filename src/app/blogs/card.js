import Link from "next/link";

export default function Card(props) {
  return (
    <div className="box">
      <div className="image">
        <img src={props.imgSrc} width={400} height={270} alt={props.imgAlt} />
      </div>
      <div className="blog-content">
        <h3 className="heading">{props.title}</h3>
        <p>{props.summary}</p>
        <Link href={`/blogs/${props.href}`}>
          {props.children || "Read more"}
        </Link>
      </div>
    </div>
  );
}
