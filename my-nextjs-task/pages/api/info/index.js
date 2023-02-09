import {info} from '../../../info'


export default function handler(req, res) {
    res.status(200).json({info})
  }