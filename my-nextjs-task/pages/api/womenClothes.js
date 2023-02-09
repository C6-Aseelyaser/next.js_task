import { womenClothes } from "@/womenClothes";

export default function handler (req, res) {
    res.status(200).json({womenClothes})
}