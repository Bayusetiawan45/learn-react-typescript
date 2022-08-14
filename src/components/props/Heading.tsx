// type children: String

type HeadingProps = {
  children: string;
};

export default function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}
