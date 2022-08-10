import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li className="list-group-item" key={index}>
          {item.title}
          <div
            onClick={() => onRemoveReminder(item.id)}
            className="button btn btn-outline-danger mx-2 rounded-pill"
          >
            Delete
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
