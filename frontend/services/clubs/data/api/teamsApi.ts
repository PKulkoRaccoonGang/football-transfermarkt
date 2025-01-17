import axios from "axios";

interface Team {
  id: number;
  name: string;
}

const toCamelCase = (str: string): string =>
  str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const convertToCamelCase = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(convertToCamelCase);
  } else if (data !== null && typeof data === "object") {
    return Object.keys(data).reduce((acc, key) => {
      const camelKey = toCamelCase(key);
      acc[camelKey] = convertToCamelCase(data[key]);
      return acc;
    }, {} as Record<string, any>);
  }
  return data;
};

export const fetchTeams = async (): Promise<Team[]> => {
  try {
    const response = await axios.get<Team[]>("http://127.0.0.1:8000/api/v1/teams/");
    return convertToCamelCase(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw new Error("Failed to fetch teams");
  }
};

export const fetchTeamById = async (id: number): Promise<Team> => {
  try {
    const response = await axios.get<Team>(`http://127.0.0.1:8000/api/v1/teams/${id}/`);
    return convertToCamelCase(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw new Error(`Failed to fetch team with id ${id}`);
  }
};

