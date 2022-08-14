// in this page you will learn object type props
import { PersonProps } from "../../models/person";

export default function Person({ name }: PersonProps) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}
