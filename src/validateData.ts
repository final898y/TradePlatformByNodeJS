import { z } from "zod";
import * as userModel from "./model/userModel";

const PartialUserSchema = userModel.UserSchema.pick({
    Name: true,
    MobilePhone: true,
    Email: true,
  });

