"use client"
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      
      try {
        const response = await fetch(`https://api-queue.tamiang-autoprima.id/api/queue-category/6ec82715-8de0-11ee-9bbc-283926c0821e/a6b7e1db-8de0-11ee-9bbc-283926c0821e`);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const data = await response.json();

        console.log(data);
        setQueue(data.data);
      } catch (error) {
        console.error('Ada masalah dengan permintaan:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {queue.map((item, index) => (
        // Pastikan bahwa properti yang diakses sesuai dengan struktur data yang diterima dari API
        <p key={index}>{item.category_name}</p>
      ))}
    </div>
  );
};

export default Test;
