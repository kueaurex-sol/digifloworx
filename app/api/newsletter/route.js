import { dbConnect } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    await dbConnect();

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return Response.json({ error: "This email is already subscribed." }, { status: 409 });
    }

    await Subscriber.create({ email, source: "footer" });

    return Response.json({ message: "Subscribed successfully." }, { status: 201 });
  } catch (error) {
    if (error?.code === 11000) {
      return Response.json({ error: "This email is already subscribed." }, { status: 409 });
    }
    console.error("Newsletter subscribe error:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}