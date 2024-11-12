import { bids as bidsSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { db as database} from "@/db/database";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/sign-in";

export default async function HomePage() {
    const bids = await database.query.bids.findMany();

    return (
        <main>
            <SignIn/>
            <form
            action={async (formData: FormData) => {
                "use server";

                await database.insert(bidsSchema).values({});
                revalidatePath("/");
            }}>

            <Input type="text" name="bid" placeholder="bid" />
            <Button type="submit">
                Place Bid
            </Button>

            {
                bids.map((bid) => (
                    <div key={bid.id}>
                        {bid.id}
                    </div>
                ))
            }
                
                
            </form>
        </main>
    )
}