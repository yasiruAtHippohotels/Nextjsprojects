"use client";
import axios from "axios";
import { log } from "console";
import React, { useEffect, useState } from "react";

function ClientSideRendering() {
  const [time, setTime] = useState<string>();
  const [loading, setloading] = useState<boolean>(false);

  const getTime = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(
        `http://worldtimeapi.org/api/timezone/Asia/Colombo`
      );

      setTime(data.datetime);
    } catch (error: any) {
      console.error("error fectcing time:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getTime();
  }, [time]);

  return (
    <div>
      <p>{time && new Date(time).toLocaleString()}</p>
    </div>
  );
}

export default ClientSideRendering;
