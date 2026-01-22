import { useEffect, useState } from "react";
import axios from "axios";

const apibase = import.meta.env.VITE_API_URL;

export function useCollection() {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCollection = async () => {
    try {
      const res = await axios.get(`${apibase}/api/v2/collections`);
      setCollection(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return { collection, loading };
}
