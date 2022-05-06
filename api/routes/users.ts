import express, {Request, Response} from 'express'
import { ObjectId } from 'mongodb';
import { collections } from '../db/conn';
const router = express.Router();

router.use(express.json()) // tell express to use json middleware

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next) {
  res.status(200).json({test: "/users"})
});

module.exports = router;
