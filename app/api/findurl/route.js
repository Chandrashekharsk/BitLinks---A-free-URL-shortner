import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  return NextResponse.json(
    {
      success: false,
      error: true,
      message: 'this Method not allowed. Use POST to find a URL.',
    },
    { status: 405 }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          error: true,
          message: 'Original URL is required',
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('bitlinks');
    const collection = db.collection('urls');

    const urlDoc = await collection.findOne({ url });

    if (!urlDoc) {
      return NextResponse.json(
        {
          success: false,
          error: true,
          message: 'No short URL found for the given original link.',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        error: false,
        data: {
          shortUrl: urlDoc.shortUrl,
        },
        message: 'Short URL found successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[FIND_URL_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: true,
        message: 'Server error. Please try again later.',
      },
      { status: 500 }
    );
  }
}



