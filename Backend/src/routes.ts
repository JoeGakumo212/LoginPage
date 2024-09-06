import { Request, Response } from 'express';

const hardcodedUser = {
  name: 'JohnDoe',
  password: 'password123',
};

export const loginRoute = (req: Request, res: Response) => {
  const { name, password } = req.body;

  if (name === hardcodedUser.name && password === hardcodedUser.password) {
    res.json({ success: true, user: { name } });
  } else {
    res.json({ success: false });
  }
};
