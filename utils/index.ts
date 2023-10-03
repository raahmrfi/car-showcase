import { CarProps, FilterProps } from "@/types";
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, fuel, limit, model, year } = filters;

  if (!process.env.API_NINJAS_API_KEY) return null;
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.API_NINJAS_API_KEY,
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    }
  );

  const result = response.json();
  return result;
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; // Harga sewa dasar per hari dalam dolar
  const mileageFactor = 0.1; // Tarif tambahan per mil digerakkan
  const ageFactor = 0.05; // Tingkat tambahan per tahun usia kendaraan

  // Hitung tarif tambahan berdasarkan jarak tempuh dan usia
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //Hitung total tarif sewa per hari
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export function generateCarImageUrl(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getImage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};
