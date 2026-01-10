import express from "express";
import {ENV} from "./config/env";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express';

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL}))
app.use(clerkMiddleware()); // auth obj will be attached to the req
//The clerkMiddleware() function checks the request's cookies and headers for a session JWT and, if found, attaches the Auth object to the request object under the auth key.
app.use(express.json()); //parses JSON request bodies.
app.use(express.urlencoded({extended: true})); //parses from data (like hTML forms)

app.get("/", (req,res)=> {
    res.json({
        message: "Welcome to shoppy mart - powered by postgreSQL , Drizzle ORM & clerk Auth",
        endpoints: {
            users: "/api/users",
            products: "/api/products",
            comments: "/api/comments",
        },
    });
});

app.listen(ENV.PORT, ()=>{
    console.log("server is running on port:", ENV.PORT);
});