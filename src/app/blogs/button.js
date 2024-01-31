import Link from "next/link";

const Button = (props) => {
  if (props.href) {
    return <Link href={`/blogs/${props.href}`}>{props.children}</Link>;
  }
  return <button>{props.children}</button>;
};

export default Button;
