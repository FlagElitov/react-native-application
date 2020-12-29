import React from "react";
import { View } from "react-native";

import Content from "./Content";
import axios from "axios";

export interface PlanetaryData {
  title?: string;
  url?: string;
  date?: string;
  service_version?: string;
  explanation?: string;
}

const Planetary: React.FC = () => {
  const API_KEY = "Bm5oBuVTS8seqOONvgjutNa1Ygr6Vg1XvfXmkk2O";
  const [state, setState] = React.useState<PlanetaryData | undefined>();

  React.useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setState(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <View>
      <Content
        title={state.title}
        url={state.url}
        date={state.date}
        service_version={state.service_version}
        explanation={state.explanation}
      />
    </View>
  );
};

export default Planetary;
