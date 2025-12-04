import { dbConnect } from "../../../lib/mongodb";
import Contact from "../../../models/contacts";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const newContact = await Contact.create(body);

    return Response.json(
      { success: true, contact: newContact },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return Response.json(
      { success: true, contacts },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();

    // Get ID from query
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json(
        { success: false, message: "Contact ID is required" },
        { status: 400 }
      );
    }

    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return Response.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { success: true, message: "Contact deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
