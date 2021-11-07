import express, { Router } from 'express';
import { GifModel } from 'src/shared/models/gif';
import { GiphyService } from '../service';

export function GiphyRouter(router: Router = express.Router()): Router {
  /**
   * @openapi
   * /giphy:
   *   get:
   *     summary: Get gifs based on the given search term
   *     tags:
   *       - Giphy
   *     parameters:
   *       - name: q
   *         in: query
   *         description: Search term
   *         required: true
   *         default: "cats"
   *       - name: limit
   *         in: query
   *         description: Limit of items to be returned
   *         required: false
   *         default: 25
   *       - name: offset
   *         in: query
   *         description: Start point
   *         required: false
   *         default: 0
   *     responses:
   *       500:
   *         description: Internal server error
   *       404:
   *         description: Could not find any gifs from the providen Search Term.
   *       200:
   *         description: Returns an array of GIFs containing id, title, provider and image urls.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                  $ref: '#/components/schemas/Gif'
   * components:
   *   schemas:
   *     Gif:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *         title:
   *           type: string
   *         provider:
   *           type: string
   *         images:
   *           type: object
   *           properties:
   *             still:
   *               type: string
   *             preview:
   *               type: string
   *             downsized:
   *               type: string
   *             original:
   *               type: string
   */
  router.get('/', (req, res) => {
    const giphy = new GiphyService();
    const q = String(req.query.q);
    const limit = Number(req.query?.limit) || 10;
    const offset = Number(req.query?.offset) || 0;

    giphy
      .get({
        q,
        limit,
        offset,
      })
      .then((data: GifModel[]) => {
        if (data.length != 0) {
          res.status(200).json(data);
        } else {
          res.status(404).send('Not found');
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });

  return router;
}
