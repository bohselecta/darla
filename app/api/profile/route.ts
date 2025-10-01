import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@clerk/nextjs"; // if using Clerk
// import { prisma } from "@/lib/prisma"; // your prisma client

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // TODO: replace with real auth
    // const { userId } = auth();
    // if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    // Basic server-side checks (you can mirror zod schema here if you want)
    if (!body.name || !body.handle) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // await prisma.user.update({
    //   where: { id: userId },
    //   data: {
    //     name: body.name,
    //     handle: body.handle,
    //     country: body.country,
    //     org: body.org ?? null,
    //     bio: body.bio ?? null,
    //     skills: body.skills ?? [],
    //     // optional: store links in separate fields or JSON
    //   },
    // });

    // For now, just echo success:
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return new NextResponse((e as Error)?.message ?? "Server error", { status: 500 });
  }
}
