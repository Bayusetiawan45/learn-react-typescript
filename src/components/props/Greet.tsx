// string, number, boolean, optional type props

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0, name } = props;
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Welcome ${name}, you have ${messageCount} unread message`
          : `Welcome Guest`}
      </h1>
    </div>
  );
}
