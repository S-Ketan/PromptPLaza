import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        await connectToDatabase();
        const prompts = await Prompt.find().populate('creator');
        console.log("Fetched Prompts with Populated Creator:", prompts);
        return NextResponse.json(prompts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch all Prompts" }, { status: 500 });
        
    }
}