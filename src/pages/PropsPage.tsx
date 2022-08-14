import Button from "../components/props/Button";
import Container from "../components/props/Container";
import Greet from "../components/props/Greet";
import Heading from "../components/props/Heading";
import Input from "../components/props/Input";
import Oscar from "../components/props/Oscar";
import Person from "../components/props/Person";
import PersonList from "../components/props/PersonList";
import Status from "../components/props/Status";

export default function PropsPage() {
  const personName = {
    first: "Bayu",
    last: "Setiawan",
  };

  const nameList = [
    {
      first: "Bayu",
      last: "Setiawan",
    },
    {
      first: "Tiyas",
      last: "Akbar",
    },
    {
      first: "Yoga",
      last: "Hafiz",
    },
  ];

  return (
    <div>
      <Greet name={"bayu"} messageCount={100} isLoggedIn={true} />
      <Greet name={"tiyas optional types"} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Hallo Children</Heading>
      <Oscar>
        <Heading>Hello Oscar</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}
