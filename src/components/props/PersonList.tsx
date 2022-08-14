// in this page you will learn array type props

import { Name } from "../../models/person";

type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <h2 key={index}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}
