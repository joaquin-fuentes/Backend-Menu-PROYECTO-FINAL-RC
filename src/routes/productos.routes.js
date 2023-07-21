import { Router } from 'express';

const router = Router();

// app.get("/prueba", (_request, response) => {
//   response.send("Solicitud get al backend");
// });
router.route('/productos').get((_request, response) => {
  response.send('Solicitud get al backend');
})

export default router;
