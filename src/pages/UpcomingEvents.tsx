import { useEffect, useState } from "react";

import { Event } from "../components/Event";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { NoResults } from "../components/NoResults";
import { Header } from "../components/Header";
import { EventbriteEventData } from "../helpers/eventbriteEvents";


type UpcomingEventsProps = {
  data: EventbriteEventData[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const UpcomingEvents = ({
  data,
  searchQuery,
  setSearchQuery,
}: UpcomingEventsProps) => {
  const [filteredData, setFilteredData] = useState<EventbriteEventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    setFilteredData(data);
    data && data.length > 0 && setLoading(false);
    data.length === 0 && setLoading(false); setNoResults(true);
  }, [data]);

  return (
    <>
      <Header />
      <main>
        <h1>HYF events on Eventbrite</h1>
        {!loading && !noResults && (
          <Search value={searchQuery} setSearchQuery={setSearchQuery} />
        )}
        <div className="cards">
          {loading ? (
            <Loading />
          ) : filteredData.length ? (
            filteredData.map((event: EventbriteEventData) => {
              return <Event data={event} key={event.id} showCapacity={true} />;
            })
          ) : (
            <NoResults />
          )}
        </div>
      </main>
    </>
  );
};
