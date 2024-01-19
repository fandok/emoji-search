import { useMemo, useState } from "react";
import { Container, List } from "reactstrap";

import emojiList from "./emojiList.json";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredEmojiList = useMemo(() => {
    if (search) {
      return emojiList.filter((val) => {
        const loweredCaseSearch = search.toLowerCase();
        return (
          val.title.toLowerCase().includes(loweredCaseSearch) ||
          val.keywords.includes(loweredCaseSearch)
        );
      });
    } else {
      return emojiList;
    }
  }, [search]);

  return (
    <Container fluid="sm">
      <h1 style={{ textAlign: "center" }}>Emoji Search</h1>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ width: "100%" }}
      />
      <List>
        {filteredEmojiList.map((val) => (
          <div key={val.title}>
            {val.symbol} {val.title}
          </div>
        ))}
      </List>
    </Container>
  );
};

export default App;
