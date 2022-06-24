import { useEffect, useState } from "react";

import { Event } from "../components/Event";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { NoResults } from "../components/NoResults";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { EventbriteEventData } from "../helpers/eventbriteEvents";

type PastEventsProps = {
  data: EventbriteEventData[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onLoadClick?: () => void;
  continuation?: string;
};

export const PastEvents = ({
  data,
  searchQuery,
  setSearchQuery,
  onLoadClick,
  continuation,
}: PastEventsProps) => {
  const [filteredData, setFilteredData] = useState<EventbriteEventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setFilteredData(data);
    data.length && setLoading(false);
  }, [data]);

  return (
    <>
      <Header />
      <main>
        <h1>HYF events on Eventbrite</h1>
        {!loading && <Search value={searchQuery} setSearchQuery={setSearchQuery} />}
        <div className="cards">
          {loading ? (
            <Loading />
          ) : filteredData.length ? (
            filteredData.map((event: EventbriteEventData) => {
              return <Event data={event} key={event.id} showCapacity={false} />;
            })
          ) : (
            <NoResults />
          )}
        </div>
        {!loading && continuation && (
          <Button
            text="Load more"
            onClick={() => onLoadClick && onLoadClick()}
            className="load"
          />
        )}
      </main>
    </>
  );
};
