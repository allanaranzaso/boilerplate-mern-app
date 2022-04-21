import express, {Request, Response} from 'express'
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next) {
  res.status(200).json({test: "/users"})
});

module.exports = router;
