"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getChows } from "@/app/actions/chows";
import ChowsSection from "@/app/components/chowsSection";
import { Puff } from "react-loading-icons";
import Button from "@/app/components/ui/button";

type ChowsData = {
  id: number;
  attributes: {
    Description: string;
    Image: { data: Array<any> };
    Title: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};

const ChowsPage = () => {
  const [data, setData] = useState<ChowsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getChows();
        const fetchedData: ChowsData[] = response.data;
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const selectedItem = data.find((item) => item.id === index);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center bg-chow h-screen">
          <Puff stroke="#fff" />
        </div>
      ) : selectedItem ? (
        <ChowsSection
          title={selectedItem.attributes.Title}
          description={selectedItem.attributes.Description}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <div className="flex flex-col  items-center justify-center bg-chow h-screen">
          <h1 className="text-white text-3xl">Fin</h1>
        </div>
      )}
    </div>
  );
};

export default ChowsPage;
