import React, { useEffect, useState } from "react";
import NewReminder from "../components/NewReminder";
import ReminderList from "../components/ReminderList";
import Reminder from "../models/reminder";
import reminderService from "../services/reminder";

function ReminderPage() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div>
      <button className="btn-primary text-white">Submit</button>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default ReminderPage;
