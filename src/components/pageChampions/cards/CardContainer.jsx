"use client";

import { useState } from "react";
import useSWR from "swr";
import Card from "./Card";

const version = "14.16.1";
const API_URL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/fr_FR/champion.json`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CardContainer() {
  const { data, error } = useSWR(API_URL, fetcher);
  const [searchTerm, setSearchTerm] = useState("");

  if (error) return <div className="text-center text-2xl">Problème lors du chargement</div>;
  if (!data) return <div className="text-center text-2xl">Chargement...</div>;

  const champions = Object.keys(data.data);

  const filteredChampions = champions.filter((champion) =>
    data.data[champion].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Recherche ton champion..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredChampions.length > 0 ? (
          filteredChampions.map((champion) => (
            <Card key={champion} champion={champion} />
          ))
        ) : (
          <div className="text-center text-xl">Pas de champion trouvé</div>
        )}
      </div>
    </div>
  );
}
