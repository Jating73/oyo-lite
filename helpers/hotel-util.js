import path from 'path'
import fs from 'fs'

export async function getHotelList(cityName) {
    const filePath = path.join(process.cwd(), 'data', 'hotelData.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const hotels = JSON.parse(fileContents);

    return hotels || [];
}