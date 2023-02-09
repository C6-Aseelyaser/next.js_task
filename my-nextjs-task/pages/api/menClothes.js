import { menclothes } from "@/menClothes"
export default function handler (req, res) {
    res.status(200).json({menclothes})
}