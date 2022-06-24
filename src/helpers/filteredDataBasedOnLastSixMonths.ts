import { EventbriteEventData } from "./eventbriteEvents";

export default function filteredDataBasedOnLastSixMonths({
  data,
}: {
  data: any;
}) {
  const dataFiltered = data
    .filter((event: EventbriteEventData) => {
      const sixMonthsAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 6,
        new Date().getDate()
      );
      const eventDate = new Date(event.end.local);
      return eventDate >= sixMonthsAgo;
    })
    .map((event: EventbriteEventData) => {
      const eventDate = new Date(event.end.local);
      const monthEvent = eventDate.toLocaleString("default", {
        month: "short",
      });
      const yearEvent = eventDate.getFullYear();
      const monthYearEvent = `${monthEvent}${yearEvent}`;
      return { name: monthYearEvent, isOnline: event.online_event };
    })
    .reduce((r: any, a: { name: string; isOnline: boolean }) => {
      r[a.name] = r[a.name] || [];
      r[a.name].push(a);
      return r;
    }, []);

  return Object.entries(dataFiltered)
    .map((value) => value)
    .map((event) => event[1]);
  // .reduce(
  //   (prev: any, curr: any) => {
  //     return {
  //       name: curr[0].name,
  //       online: curr.isOnline
  //         ? prev.online + Number(curr.isOnline)
  //         : prev.online,
  //       onsite: !curr.isOnline
  //         ? prev.onsite + Number(!curr.isOnline)
  //         : prev.onsite,
  //     };
  //   },
  //   {
  //     online: 0,
  //     onsite: 0,
  //   }
  // );
}
