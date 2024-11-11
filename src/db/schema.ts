import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids =  pgTable("bidsNum" , {
    id: serial("id").primaryKey(),
})