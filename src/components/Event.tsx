import { EventbriteEventData } from "../helpers/eventbriteEvents";

export const Event = ({
  data,
  showCapacity,
}: {
  data: EventbriteEventData;
  showCapacity: boolean;
}) => {
  return (
    <article className="card">
      <img src={data.logo ? data.logo.url : ""} alt={data.name.text} />
      <div>
        <h2>{data.name.text}</h2>
        <p className="date">{new Date(data.start.utc).toLocaleString()}</p>
        <p>
          Number of Attendees:{" "}
          {showCapacity
            ? `${data.ticket_classes[0].quantity_sold} / ${data.capacity}`
            : `${data.ticket_classes[0].quantity_sold}`}
        </p>
        <p>Online event: {data.online_event ? "Yes" : "No"}</p>
      </div>
    </article>
  );
};
