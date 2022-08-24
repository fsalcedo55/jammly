import { validateRoute } from "../../lib/auth";

export default validateRoute((req, res, user) => {
  req.json(user);
});
